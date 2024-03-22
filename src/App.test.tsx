import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("should render App", () => {
  render(<App />);
});
