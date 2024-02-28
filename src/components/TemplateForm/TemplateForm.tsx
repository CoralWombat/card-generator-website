import { useEffect, useState } from "react";
import { getTemplateParameterNames } from "../../utils/templateUtils";
import { InputText } from "primereact/inputtext";

type TemplateFormProps = {
  template: string;
  onParametersChange: (newParameters: any) => void;
};

const TemplateForm = ({ template, onParametersChange }: TemplateFormProps) => {
  const templateParameterNames = getTemplateParameterNames(template);

  const [parameters, setParameters] = useState<any>({});

  useEffect(() => {
    onParametersChange(parameters);
  }, [parameters]);

  return (
    <div id="template-form" className="flex flex-column gap-4 pt-4">
      {templateParameterNames.map((parameterName) => {
        return (
          <span
            className="p-float-label"
            key={"template-form-" + parameterName}
          >
            <InputText
              className="w-full"
              id={parameterName}
              value={parameters[parameterName] || ""}
              onChange={(e) =>
                setParameters((prevState: any) => ({
                  ...prevState,
                  [parameterName]: e.target.value,
                }))
              }
            />
            <label htmlFor={parameterName}>{parameterName}</label>
          </span>
        );
      })}
    </div>
  );
};

export default TemplateForm;
