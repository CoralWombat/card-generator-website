import { getTemplateByName } from "../../utils/templateUtils";

const Mustache = require("mustache");

type TemplateRendererProps = {
  templateName: string;
  templateProps?: any;
};

const TemplateRenderer = ({
  templateName,
  templateProps,
}: TemplateRendererProps) => {
  if (!templateName) return null;

  const template = getTemplateByName(templateName);

  const output = Mustache.render(template, templateProps);
  console.log(output);

  return <div id="card-preview" dangerouslySetInnerHTML={{ __html: output }} />;
};

export default TemplateRenderer;
