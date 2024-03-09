import "./TemplateRenderer.scss";

const Mustache = require("mustache");

type TemplateRendererProps = {
  className?: string;
  template: string;
  templateParameters?: Object;
};

const TemplateRenderer = ({
  className,
  template,
  templateParameters,
}: TemplateRendererProps) => {
  if (!template) return <div className={[className, "card"].join(" ")} />;

  const output = Mustache.render(template, templateParameters);

  return (
    <div
      className={[className, "card"].join(" ")}
      dangerouslySetInnerHTML={{ __html: output }}
    />
  );
};

export default TemplateRenderer;
