import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HowToPage from "./HowToPage";

afterEach(cleanup);

it("renders how-to page", async () => {
  render(<HowToPage />);

  expect(screen.getAllByText(/Basic Usage/).length).toBe(2);
});

it("navigates to Uploading Own Data section", async () => {
  const page = render(<HowToPage />);
  fireEvent.click(page.getByText(/Uploading Own Data/));

  expect(page.getAllByText(/Uploading Own Data/).length).toBe(2);
});

it("navigates to Create Your Own Template section", async () => {
  const page = render(<HowToPage />);
  fireEvent.click(page.getByText(/Create Your Own Template/));

  expect(page.getAllByText(/Create Your Own Template/).length).toBe(2);
});
