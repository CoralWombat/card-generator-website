import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { Button } from "primereact/button";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";
import processCsv from "../../utils/csvProcessor";
import Card from "../../model/Card";
import CardsContext from "../../context/CardsContext";

type PrintPreviewControlButtonsProps = {
  template: string;
  templateParameters: any;
};

const PrintPreviewControlButtons = ({
  template,
  templateParameters,
}: PrintPreviewControlButtonsProps) => {
  const [cards, setCards] = useContext(CardsContext);

  const fileUploadReference = useRef(null);

  const onUpload = async (event: FileUploadHandlerEvent) => {
    const records = await processCsv(event.files[0]);
    const startIndex = cards.length;
    const newCards: Card[] = records.map((record, i) => {
      return {
        id: "card-" + (startIndex + i),
        template: template,
        templateParameters: record,
      };
    });
    setCards((prevCards) => [...newCards, ...prevCards]);
    fileUploadReference.current.clear();
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center">
      <FileUpload
        ref={fileUploadReference}
        disabled={template === ""}
        auto
        customUpload
        mode="basic"
        accept=".csv"
        chooseLabel="Upload Data"
        uploadHandler={onUpload}
        pt={{ chooseIcon: { className: "hidden" } }}
      />
      <Button
        id="clear-prints-button"
        label="Clear Prints"
        onClick={() => setCards([])}
      />
      <Button
        id="add-to-print-button"
        label="Add To Print"
        onClick={() =>
          setCards((prevCards) => [
            {
              id: "card-" + prevCards.length,
              template: template,
              templateParameters: templateParameters,
            },
            ...prevCards,
          ])
        }
        disabled={!template}
      />
      <Button
        id="print-button"
        label="Print"
        onClick={() => window.print()}
        disabled={cards.length === 0}
      />
    </div>
  );
};

export default PrintPreviewControlButtons;
