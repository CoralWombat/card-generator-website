import { useContext, useEffect, useRef, useState } from "react";
import "./TemplateRenderer.scss";
import { resizeText } from "../../utils/textUtils";
import { Button } from "primereact/button";
import { lazySvg } from "../../utils/lazy";
import CardsContext from "../../context/CardsContext";
import { sleepUntil } from "../../utils/timeoutUtils";

const Times = lazySvg(() => import("../../media/icon/times.svg"));

const Mustache = require("mustache");

type TemplateRendererProps = {
  className?: string;
  id?: string;
  template: string;
  templateParameters?: Object;
};

const TemplateRenderer = ({
  className,
  id,
  template,
  templateParameters,
}: TemplateRendererProps) => {
  if (!template) return <div className={[className, "card"].join(" ")} />;

  const [cards, setCards] = useContext(CardsContext);

  const [hovering, setHovering] = useState(false);

  const templateRendererRef = useRef(null);

  const output = Mustache.render(template, templateParameters);

  useEffect(() => {
    const containers = templateRendererRef.current.querySelectorAll(
      ".text-autosized-container"
    );
    containers.forEach(async (container: HTMLElement) => {
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
      className={[className, "relative"].join(" ")}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering && id && (
        <Button
          size="small"
          rounded
          severity="danger"
          className="no-print absolute top-1 right-1 h-4 w-4 z-50"
          style={{
            padding: "0rem",
            background: "rgb(220 38 38)",
            border: "rgb(220 38 38)",
          }}
          onClick={() => {
            setCards((prevCards) =>
              prevCards.filter((currentCard) => currentCard.id !== id)
            );
          }}
        >
          <Times width="1rem" height="1rem" fill="white" />
        </Button>
      )}
      <div
        ref={templateRendererRef}
        className={[className, "card"].join(" ")}
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </div>
  );
};

export default TemplateRenderer;
