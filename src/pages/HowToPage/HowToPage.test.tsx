import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import HowToPage from "./HowToPage";

afterEach(cleanup);

it("renders how-to page", async () => {
  render(<HowToPage />);

  expect(screen.getByText(/The basic mode/i)).toBeInTheDocument();
});
