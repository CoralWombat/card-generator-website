import { useEffect, useState } from "react";
import { GeneratorMode } from "../../model/GeneratorMode";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import TemplateRenderer from "../../components/TemplateRenderer/TemplateRenderer";

const GeneratorPage = () => {
  const [mode, setMode] = useState(GeneratorMode.Basic);
  const [template, setTemplate] = useState<string>(null);

  useEffect(() => {
    console.log("Mode changed: ", mode);
  }, [mode]);

  return (
    <div className="grid">
      <div className="col flex flex-column gap-1">
        <InputSwitch
          checked={mode === GeneratorMode.Advanced}
          onChange={(e: { value: any }) => {
            setMode(e.value ? GeneratorMode.Advanced : GeneratorMode.Basic);
          }}
        />
        <Dropdown
          value={template}
          onChange={(e) => setTemplate(e.value)}
          options={[
            {
              name: "Basic Template",
              value: "src/templates/basic-template.html",
            },
          ]}
          optionLabel="name"
          placeholder="Select Template"
        />
      </div>
      <div className="col flex justify-content-center align-content-center flex-wrap">
        <TemplateRenderer template={template} />
      </div>
    </div>
  );
};

export default GeneratorPage;
