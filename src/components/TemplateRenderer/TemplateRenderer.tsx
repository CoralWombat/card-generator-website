import { useEffect, useRef } from "react";
import "./TemplateRenderer.scss";
import { resizeText } from "../../utils/textUtils";

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

  const templateRendererRef = useRef(null);

  useEffect(() => {
    const containers = templateRendererRef.current.querySelectorAll(
      ".text-autosized-container"
    );
    containers.forEach((container: HTMLElement) => {
      const element: HTMLElement = container.querySelector(".text-autosized");
      const currentFontSize = window.getComputedStyle(element).fontSize;
      const maxFontSize = Number(
        currentFontSize.substring(0, currentFontSize.length - 2)
      );
      resizeText(element, container, maxFontSize);
    });
  }, [template, templateParameters]);

  return (
    <div
      ref={templateRendererRef}
      className={[className, "card"].join(" ")}
      dangerouslySetInnerHTML={{ __html: output }}
    />
  );
};

export default TemplateRenderer;
