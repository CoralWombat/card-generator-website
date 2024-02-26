const Mustache = require("mustache");

type TemplateRendererProps = {
  template: string;
  templateProps?: any;
};

const TemplateRenderer = ({
  template,
  templateProps,
}: TemplateRendererProps) => {
  if (!template) return null;

  const output = Mustache.render(template, templateProps);
  console.log(output);

  return <div id="card-preview" dangerouslySetInnerHTML={{ __html: output }} />;
};

export default TemplateRenderer;
