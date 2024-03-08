import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

afterEach(cleanup);

it("changes the class when hovered", async () => {
  render(<Footer />);

  expect(screen.getByText(/Cad of Cards/i)).toBeInTheDocument();
});
