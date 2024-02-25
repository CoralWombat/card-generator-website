type TemplateRendererProps = {
  template: string;
  templateProps?: any;
};

const TemplateRenderer = ({
  template,
  templateProps,
}: TemplateRendererProps) => {
  return (
    <div>
      <div>{template}</div>
      <div>{templateProps}</div>
    </div>
  );
};

export default TemplateRenderer;
