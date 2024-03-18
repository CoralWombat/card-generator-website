import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardsContext from "../../context/CardsContext";
import TemplateForm from "./TemplateForm";
import { getTemplateParameterNames } from "../../utils/templateUtils";

jest.mock("../../utils/templateUtils", () => ({
  getTemplateParameterNames: jest.fn(() => ["parameterName"]),
}));

const setCardsMock = jest.fn();
const onParametersChange = jest.fn();

const mockGetTemplateParameterNames =
  getTemplateParameterNames as jest.MockedFunction<
    typeof getTemplateParameterNames
  >;

afterEach(cleanup);

it("should render template form", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateForm
        template={"template"}
        templateParameters={{}}
        onParametersChange={onParametersChange}
      />
    </CardsContext.Provider>
  );

  expect(mockGetTemplateParameterNames).toHaveBeenCalled();
  expect(renderedComponent.getByText(/parameterName/)).toBeInTheDocument();
});

it("should call onParametersChange when typing", async () => {
  const renderedComponent = render(
    <CardsContext.Provider value={[[], setCardsMock]}>
      <TemplateForm
        template={"template"}
        templateParameters={{}}
        onParametersChange={onParametersChange}
      />
    </CardsContext.Provider>
  );

  const input = renderedComponent.getByText(
    /parameterName/
  ) as HTMLInputElement;

  fireEvent.input(input, "x");
  waitFor(() =>
    expect(onParametersChange).toHaveBeenCalledWith({ parameterName: "x" })
  );
  waitFor(() => expect(input.value).toBe("x"));
});
