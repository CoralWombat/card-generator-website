import Card from "../../model/Card";
import TemplateRenderer from "../TemplateRenderer/TemplateRenderer";

type PrintPreviewProps = {
  cards: Card[];
};

const PrintPreview = ({ cards }: PrintPreviewProps) => {
  return (
    <div className="flex flex-wrap">
      {cards.map((card, i) => (
        <TemplateRenderer
          key={"card-" + i}
          template={card.template}
          templateParameters={card.templateParameters}
        />
      ))}
    </div>
  );
};

export default PrintPreview;
