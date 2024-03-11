import { useEffect, useMemo, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
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
import PrintPreviewControlButtons from "../../components/PrintPreviewControlButtons/PrintPreviewControlButtons";

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
            <span className="p-float-label mt-3">
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
          <PrintPreviewControlButtons
            advancedMode={advancedMode}
            cards={cards}
            setCards={setCards}
            template={template}
            templateParameters={templateParameters}
          />
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
