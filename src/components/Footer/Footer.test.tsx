import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

afterEach(cleanup);

it("renders footer", async () => {
  render(<Footer />);

  expect(screen.getByText(/CAD of Cards/i)).toBeInTheDocument();
});
