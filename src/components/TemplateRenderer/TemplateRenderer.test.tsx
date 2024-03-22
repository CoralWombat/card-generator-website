import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardsContext from "../../context/CardsContext";
import TemplateRenderer from "./TemplateRenderer";
import { resizeText } from "../../utils/textUtils";

jest.mock("../../utils/textUtils", () => ({
  resizeText: jest.fn(() => ["parameterName"]),
}));

const mockResizeText = resizeText as jest.MockedFunction<typeof resizeText>;

const setCardsMock = jest.fn();

it("should render template renderer", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer template={"template"} />
    </CardsContext.Provider>
  );

  expect(renderedComponent.getByText(/template/)).toBeInTheDocument();
});

it("should not render template renderer", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer template={""} />
    </CardsContext.Provider>
  );

  expect(renderedComponent.queryByText(/template/)).not.toBeInTheDocument();
});

it("should render template renderer with parameters", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer
        template={"template: {{x}}"}
        templateParameters={{ x: "y" }}
      />
    </CardsContext.Provider>
  );

  expect(renderedComponent.getByText(/y/)).toBeInTheDocument();
});

it("should render remove button", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer template={"template"} id="id" />
    </CardsContext.Provider>
  );

  const card = renderedComponent.getByText(/template/);
  fireEvent.mouseEnter(card, {});
  expect(
    renderedComponent.container.querySelector(".p-button")
  ).toBeInTheDocument();

  fireEvent.mouseLeave(card, {});
  expect(
    renderedComponent.container.querySelector(".p-button")
  ).not.toBeInTheDocument();
});

it("should not render remove button", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer template={"template"} />
    </CardsContext.Provider>
  );

  const card = renderedComponent.getByText(/template/);
  fireEvent.mouseEnter(card, {});
  expect(
    renderedComponent.container.querySelector(".p-button")
  ).not.toBeInTheDocument();
});

it("should call setCards on clicking remove button", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateRenderer template={"template"} id="id" />
    </CardsContext.Provider>
  );

  const card = renderedComponent.getByText(/template/);
  fireEvent.mouseEnter(card, {});
  const removeButton = renderedComponent.container.querySelector(".p-button");
  expect(removeButton).toBeInTheDocument();

  fireEvent.click(removeButton);
  expect(setCardsMock).toHaveBeenCalled();
});

it("should call resizeText on template or templateParameters change", async () => {
  const renderedComponent = render(
    <TemplateRenderer template={"template"} templateParameters={{}} />,
    {
      wrapper: (props) => <CardsContext.Provider value={[[], setCardsMock]} />,
    }
  );

  renderedComponent.rerender(
    <TemplateRenderer template={"template_2"} templateParameters={{}} />
  );

  renderedComponent.rerender(
    <TemplateRenderer
      template={"template_2"}
      templateParameters={{ param: "param" }}
    />
  );

  waitFor(() => {
    expect(mockResizeText).toHaveBeenCalledTimes(3);
  });
});
