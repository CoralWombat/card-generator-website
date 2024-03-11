import { useEffect, useMemo, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { InputTextarea } from "primereact/inputtextarea";
import { getTemplateByName } from "../../utils/templateUtils";
import Card from "../../model/Card";
import DefaultComponentProps from "../../model/DefaultComponentProps";
import TemplateRenderer from "../../components/TemplateRenderer/TemplateRenderer";
import TemplateForm from "../../components/TemplateForm/TemplateForm";
import PrintPreview from "../../components/PrintPreview/PrintPreview";
import templateOptions, {
  customTemplateOption,
} from "../../components/constants/TemplateOptions";

const GeneratorPage = ({ className }: DefaultComponentProps) => {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [selectedTemplateOption, setSelectedTemplateOption] =
    useState<string>(null);
  const [template, setTemplate] = useState<string>(null);
  const [templateParameters, setTemplateParameters] = useState<any>({});
  const [cards, setCards] = useState<Card[]>([]);

  const customTemplateSelected = useMemo(
    () => selectedTemplateOption === customTemplateOption.name,
    [selectedTemplateOption]
  );

  useEffect(() => {
    if (!selectedTemplateOption) return undefined;
    if (customTemplateSelected) {
      setTemplate("");
    } else {
      setTemplate(getTemplateByName(selectedTemplateOption));
    }
  }, [selectedTemplateOption]);

  useEffect(() => {
    if (!selectedTemplateOption) return undefined;
    const foundOption = templateOptions.find(
      (option) => option.name === selectedTemplateOption
    );

    setTemplateParameters(foundOption ? foundOption.defaultValues : {});
  }, [template]);

  return (
    <div className={className + " flex flex-col w-full"}>
      <div className="flex flex-row justify-center">
        <div className="no-print flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-2 items-center">
            <InputSwitch
              checked={advancedMode}
              onChange={(e) => setAdvancedMode(e.value)}
            />
            Advanced Mode
          </div>
          <Dropdown
            value={selectedTemplateOption}
            onChange={(e) => setSelectedTemplateOption(e.value)}
            options={
              advancedMode
                ? [customTemplateOption, ...templateOptions]
                : templateOptions
            }
            optionLabel="label"
            optionValue="name"
            placeholder="Select Template"
          />
          {advancedMode && customTemplateSelected && (
            <span className="p-float-label">
              <InputTextarea
                id="custom-template-text-field"
                className="w-full"
                autoResize
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                rows={5}
              />
              <label htmlFor="custom-template-text-field">Template</label>
            </span>
          )}
          {template && (
            <TemplateForm
              template={template}
              templateParameters={templateParameters}
              onParametersChange={(newParameters: any) =>
                setTemplateParameters(newParameters)
              }
            />
          )}
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            <Button onClick={() => setCards([])}>Clear Prints</Button>
            <Button
              onClick={() =>
                setCards((prevCards) => [
                  ...prevCards,
                  {
                    template: template,
                    templateParameters: templateParameters,
                  },
                ])
              }
              disabled={!template}
            >
              Add To Print
            </Button>
            <Button
              onClick={() => window.print()}
              disabled={cards.length === 0}
            >
              Print
            </Button>
          </div>
        </div>
        <Divider className="no-print" layout="vertical" />
        <TemplateRenderer
          className="no-print w-full self-center"
          template={template}
          templateParameters={templateParameters}
        />
      </div>
      <Divider className="no-print" />
      <PrintPreview cards={cards} />
    </div>
  );
};

export default GeneratorPage;
