import TemplateRenderer from "../TemplateRenderer/TemplateRenderer";
import { useContext } from "react";
import CardsContext from "../../context/CardsContext";

type PrintPreviewProps = {};

const PrintPreview = ({}: PrintPreviewProps) => {
  const [cards, setCards] = useContext(CardsContext);
  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <TemplateRenderer
          key={card.id}
          id={card.id}
          template={card.template}
          templateParameters={card.templateParameters}
        />
      ))}
    </div>
  );
};

export default PrintPreview;
