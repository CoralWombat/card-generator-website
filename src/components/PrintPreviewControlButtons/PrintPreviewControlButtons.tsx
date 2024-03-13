import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "primereact/button";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";
import processCsv from "../../utils/csvProcessor";
import Card from "../../model/Card";

type PrintPreviewControlButtonsProps = {
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
  template: string;
  templateParameters: any;
};

const PrintPreviewControlButtons = ({
  cards,
  setCards,
  template,
  templateParameters,
}: PrintPreviewControlButtonsProps) => {
  const fileUploadReference = useRef(null);

  const onUpload = async (event: FileUploadHandlerEvent) => {
    const records = await processCsv(event.files[0]);
    const cards = records.map((record) => {
      return {
        template: template,
        templateParameters: record,
      };
    });
    setCards((prevCards) => [...cards, ...prevCards]);
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