import { useEffect, useState } from "react";
import { GeneratorMode } from "../../model/GeneratorMode";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import TemplateRenderer from "../../components/TemplateRenderer/TemplateRenderer";
import { getTemplateByName } from "../../utils/templateUtils";
import TemplateForm from "../../components/TemplateForm/TemplateForm";
import { Divider } from "primereact/divider";

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
];

const GeneratorPage = () => {
  const [mode, setMode] = useState(GeneratorMode.Basic);
  const [selectedTemplateOption, setSelectedTemplateOption] =
    useState<TemplateOption>(null);
  const [template, setTemplate] = useState<string>(null);
  const [templateParameters, setTemplateParameters] = useState<any>({});

  useEffect(() => {
    if (!selectedTemplateOption) return undefined;
    setTemplate(getTemplateByName(selectedTemplateOption.name));
  }, [selectedTemplateOption]);

  return (
    <div className="grid">
      <div className="col-offset-2 col-4 flex flex-column gap-1">
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
          placeholder="Select Template"
        />
        <TemplateForm
          template={template}
          onParametersChange={(newParameters: any) =>
            setTemplateParameters(newParameters)
          }
        />
      </div>
      <Divider layout="vertical" />
      <div className="col-4 flex justify-content-start align-content-center flex-wrap">
        <TemplateRenderer
          template={template}
          templateParameters={templateParameters}
        />
      </div>
      <Divider />
    </div>
  );
};

export default GeneratorPage;
