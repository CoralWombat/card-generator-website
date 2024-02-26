import { useEffect, useState } from "react";
import { getTemplateParameterNames } from "../../utils/templateUtils";
import { InputText } from "primereact/inputtext";

type TemplateFormProps = {
  template: string;
  onParametersChange: (newParameters: any) => void;
};

const TemplateForm = ({ template, onParametersChange }: TemplateFormProps) => {
  if (!template) return undefined;

  const [templateParameterNames, setTemplateParameterNames] = useState<
    string[]
  >(getTemplateParameterNames(template));
  const [parameters, setParameters] = useState<any>({});

  useEffect(() => {
    onParametersChange(parameters);
  }, [parameters]);

  return (
    <div id="template-form">
      {templateParameterNames.map((parameterName) => {
        return (
          <span className="p-float-label">
            <InputText
              id={parameterName}
              value={parameters[parameterName]}
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
