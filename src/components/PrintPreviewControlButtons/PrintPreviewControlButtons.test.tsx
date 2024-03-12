import {
  screen,
  render,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PrintPreviewControlButtons from "./PrintPreviewControlButtons";

import processCsv from "../../utils/csvProcessor";

jest.mock("../../utils/csvProcessor"); // this happens automatically with automocking

afterEach(cleanup);

it("renders PrintPreviewControlButtons", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={""}
      templateParameters={{}}
    />
  );

  expect(renderedComponent.getByText(/Upload Data/)).toBeInTheDocument();
  expect(
    renderedComponent.container.querySelector("#clear-prints-button")
  ).toBeInTheDocument();
  expect(
    renderedComponent.container.querySelector("#add-to-print-button")
  ).toBeInTheDocument();
  expect(
    renderedComponent.container.querySelector("#print-button")
  ).toBeInTheDocument();
});

it("should enable buttons when there is a teplate", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={"template"}
      templateParameters={{}}
    />
  );

  const uploadDataButton = renderedComponent.getByText(/Upload Data/);
  expect(uploadDataButton).toBeInTheDocument();
  expect(uploadDataButton.parentElement).not.toHaveClass(/p-disabled/);

  const addToPrintButton = renderedComponent.container.querySelector(
    "#add-to-print-button"
  );
  expect(addToPrintButton).toBeInTheDocument();
  expect(addToPrintButton.parentElement).not.toHaveClass(/p-disabled/);
});

it("should disable buttons when there is no template", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={""}
      templateParameters={{}}
    />
  );

  const uploadDataButton = renderedComponent.getByText(/Upload Data/);
  expect(uploadDataButton).toBeInTheDocument();
  expect(uploadDataButton.parentElement).toHaveClass(/p-disabled/);

  const addToPrintButton = renderedComponent.container.querySelector(
    "#add-to-print-button"
  );
  expect(addToPrintButton).toBeInTheDocument();
  expect(addToPrintButton).toHaveClass(/p-disabled/);
});

it("should enable buttons when there are cards", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[{ template: "" }]}
      setCards={setCardsMock}
      template={"template"}
      templateParameters={{}}
    />
  );

  const printButton =
    renderedComponent.container.querySelector("#print-button");
  expect(printButton).toBeInTheDocument();
  expect(printButton).not.toHaveClass(/p-disabled/);
});

it("should disable buttons when there are no cards", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={"template"}
      templateParameters={{}}
    />
  );

  const printButton =
    renderedComponent.container.querySelector("#print-button");
  expect(printButton).toBeInTheDocument();
  expect(printButton).toHaveClass(/p-disabled/);
});

it("should call setCards on clicking clear cards", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={""}
      templateParameters={{}}
    />
  );

  fireEvent.click(
    renderedComponent.container.querySelector("#clear-prints-button")
  );

  expect(setCardsMock).toHaveBeenCalledTimes(1);
  expect(setCardsMock).toHaveBeenCalledWith([]);
});

it("should call setCards on clicking add card", async () => {
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[]}
      setCards={setCardsMock}
      template={"template"}
      templateParameters={{}}
    />
  );

  fireEvent.click(
    renderedComponent.container.querySelector("#add-to-print-button")
  );

  expect(setCardsMock).toHaveBeenCalledTimes(1);
});

it("should print on clicking print", async () => {
  window.print = jest.fn();
  const setCardsMock = jest.fn();

  const renderedComponent = render(
    <PrintPreviewControlButtons
      cards={[{ template: "" }]}
      setCards={setCardsMock}
      template={""}
      templateParameters={{}}
    />
  );

  fireEvent.click(renderedComponent.container.querySelector("#print-button"));
  expect(window.print).toHaveBeenCalledTimes(1);
});
