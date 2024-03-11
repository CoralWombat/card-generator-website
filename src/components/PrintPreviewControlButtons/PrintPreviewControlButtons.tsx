import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "primereact/button";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";
import processCsv from "../../utils/csvProcessor";
import Card from "../../model/Card";

type PrintPreviewControlButtonsProps = {
  advancedMode: boolean;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
  template: string;
  templateParameters: any;
};

const PrintPreviewControlButtons = ({
  advancedMode,
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
    setCards((prevCards) => [...prevCards, ...cards]);
    fileUploadReference.current.clear();
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center">
      {advancedMode && (
        <FileUpload
          ref={fileUploadReference}
          auto
          customUpload
          mode="basic"
          accept=".csv"
          chooseLabel="Upload Data"
          uploadHandler={onUpload}
        />
      )}
      <Button label="Clear Prints" onClick={() => setCards([])} />
      <Button
        label="Add To Print"
        onClick={() =>
          setCards((prevCards) => [
            ...prevCards,
            {
              template: template,
              templateParameters: templateParameters,
            },
          ])
        }
        disabled={!template}
      />
      <Button
        label="Print"
        onClick={() => window.print()}
        disabled={cards.length === 0}
      />
    </div>
  );
};

export default PrintPreviewControlButtons;
