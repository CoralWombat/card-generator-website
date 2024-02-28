import "./TemplateRenderer.scss";

const Mustache = require("mustache");

type TemplateRendererProps = {
  template: string;
  templateParameters?: Object;
};

const TemplateRenderer = ({
  template,
  templateParameters,
}: TemplateRendererProps) => {
  if (!template) return null;

  const output = Mustache.render(template, templateParameters);

  return <div className="card" dangerouslySetInnerHTML={{ __html: output }} />;
};

export default TemplateRenderer;
