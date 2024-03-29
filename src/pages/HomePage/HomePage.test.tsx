import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

afterEach(cleanup);

it("renders home page", async () => {
  render(<HomePage />);

  expect(screen.getByText(/Welcome to Forge of Cards/i)).toBeInTheDocument();
});
