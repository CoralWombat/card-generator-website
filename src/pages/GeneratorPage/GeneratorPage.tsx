import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import TemplateRenderer from "../../components/TemplateRenderer/TemplateRenderer";
import { getTemplateByName } from "../../utils/templateUtils";
import TemplateForm from "../../components/TemplateForm/TemplateForm";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import Card from "../../model/Card";
import PrintPreview from "../../components/PrintPreview/PrintPreview";
import DefaultComponentProps from "../../model/DefaultComponentProps";
import templateOptions from "../../components/constants/TemplateOptions";

const GeneratorPage = ({ className }: DefaultComponentProps) => {
  const [selectedTemplateOption, setSelectedTemplateOption] =
    useState<string>(null);
  const [template, setTemplate] = useState<string>(null);
  const [templateParameters, setTemplateParameters] = useState<any>({});
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!selectedTemplateOption) return undefined;
    setTemplate(getTemplateByName(selectedTemplateOption));
  }, [selectedTemplateOption]);

  useEffect(() => {
    selectedTemplateOption &&
      setTemplateParameters(
        templateOptions.find((option) => option.name === selectedTemplateOption)
          .defaultValues
      );
  }, [template]);

  return (
    <div className={className + " flex flex-col w-full"}>
      <div className="flex flex-row">
        <div className="no-print flex flex-col gap-4 w-1/2">
          <Dropdown
            value={selectedTemplateOption}
            onChange={(e) => setSelectedTemplateOption(e.value)}
            options={templateOptions}
            optionLabel="label"
            optionValue="name"
            placeholder="Select Template"
          />
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
          className="no-print w-1/2 self-center"
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
