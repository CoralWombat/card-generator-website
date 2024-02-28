import "./GeneratorPage.scss";
import { useEffect, useState } from "react";
import { GeneratorMode } from "../../model/GeneratorMode";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import TemplateRenderer from "../../components/TemplateRenderer/TemplateRenderer";
import { getTemplateByName } from "../../utils/templateUtils";
import TemplateForm from "../../components/TemplateForm/TemplateForm";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import Card from "../../model/Card";
import PrintPreview from "../../components/PrintPreview/PrintPreview";

type TemplateOption = {
  label: string;
  name: string;
};

const templateOptions: TemplateOption[] = [
  {
    label: "Basic Template",
    name: "basic-template.html",
  },
  {
    label: "Basic Template 2",
    name: "basic-template-2.html",
  },
  {
    label: "D&D",
    name: "dnd_template.html",
  },
];

const GeneratorPage = () => {
  const [mode, setMode] = useState(GeneratorMode.Basic);
  const [selectedTemplateOption, setSelectedTemplateOption] =
    useState<string>(null);
  const [template, setTemplate] = useState<string>(null);
  const [templateParameters, setTemplateParameters] = useState<any>({});
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!selectedTemplateOption) return undefined;
    setTemplate(getTemplateByName(selectedTemplateOption));
  }, [selectedTemplateOption]);

  const onAddToPrintClick = () => {
    console.log("onAddToPrintClick fired");

    const newCards = [...cards];
    newCards.push({
      template: template,
      templateParameters: templateParameters,
    });
    setCards(newCards);
  };

  return (
    <div className="grid">
      <div className="no-print col-offset-2 col-4 flex flex-column gap-4">
        <InputSwitch
          checked={mode === GeneratorMode.Advanced}
          onChange={(e: { value: any }) => {
            setMode(e.value ? GeneratorMode.Advanced : GeneratorMode.Basic);
          }}
        />
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
            onParametersChange={(newParameters: any) =>
              setTemplateParameters(newParameters)
            }
          />
        )}
        <div className="flex flex-row flex-wrap gap-2 justify-content-center">
          <Button>Clear Prints</Button>
          <Button onClick={onAddToPrintClick}>Add To Print</Button>
          <Button>Print</Button>
        </div>
      </div>
      <Divider className="no-print" layout="vertical" />
      <TemplateRenderer
        className="no-print col-4 flex justify-content-start align-content-center flex-wrap"
        template={template}
        templateParameters={templateParameters}
      />
      <Divider className="no-print" />
      <PrintPreview cards={cards} />
    </div>
  );
};

export default GeneratorPage;
