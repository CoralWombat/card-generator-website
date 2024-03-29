import { useEffect, useMemo, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
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
import CardsContext from "../../context/CardsContext";

const GeneratorPage = ({ className }: DefaultComponentProps) => {
  const [cards, setCards] = useState<Card[]>([]);

  const [selectedTemplateOption, setSelectedTemplateOption] =
    useState<string>(null);
  const [template, setTemplate] = useState<string>(null);
  const [templateParameters, setTemplateParameters] = useState<any>({});

  const customTemplateSelected = useMemo(
    () => selectedTemplateOption === customTemplateOption.name,
    [selectedTemplateOption]
  );

  useEffect(() => {
    if (!selectedTemplateOption || customTemplateSelected) {
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
    <CardsContext.Provider value={[cards, setCards]}>
      <div className={className + " flex flex-col w-full"}>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="no-print flex flex-col gap-4 w-full">
            <Dropdown
              value={selectedTemplateOption}
              onChange={(e) => setSelectedTemplateOption(e.value)}
              options={[customTemplateOption, ...templateOptions]}
              optionLabel="label"
              optionValue="name"
              placeholder="Select Template"
              scrollHeight="9999px"
            />
            {customTemplateSelected && (
              <span className="p-float-label mt-3">
                <InputTextarea
                  id="custom-template-text-field"
                  className="w-full max-w-full"
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
              template={template}
              templateParameters={templateParameters}
            />
          </div>
          <Divider className="no-print hidden md:inline" layout="vertical" />
          <TemplateRenderer
            className="no-print w-auto md:w-full self-center mt-3 md:mt-0"
            template={template}
            templateParameters={templateParameters}
          />
        </div>
        <Divider className="no-print" />
        <PrintPreview />
      </div>
    </CardsContext.Provider>
  );
};

export default GeneratorPage;
