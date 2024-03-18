import { getTemplateParameterNames } from "../../utils/templateUtils";
import { InputText } from "primereact/inputtext";

type TemplateFormProps = {
  template: string;
  templateParameters: any;
  onParametersChange: (newParameters: any) => void;
};

const TemplateForm = ({
  template,
  templateParameters,
  onParametersChange,
}: TemplateFormProps) => {
  const templateParameterNames = getTemplateParameterNames(template);

  return (
    <div id="template-form" className="flex flex-col gap-7 pt-3">
      {templateParameterNames.map((parameterName) => {
        return (
          <span
            className="p-float-label"
            key={"template-form-" + parameterName}
          >
            <InputText
              className="w-full"
              id={parameterName}
              value={templateParameters[parameterName] || ""}
              onChange={(e) =>
                onParametersChange({
                  ...templateParameters,
                  [parameterName]: e.target.value,
                })
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
