import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Testing headers", () => {
  test("Header renders correctly", () => {
    render(<Header />);
    const headerElement = screen.getByRole("reading");
    expect(headerElement).toBe;
  });

  test("Header links have correct labels and test ids", () => {
    render(<Header />);
    const linkElements = screen.getAllByTestId("first-link-menu");
    const selectLink = linkElements[0];
    fireEvent.click(selectLink);

    expect(global.window.location.pathname).toBe("/");
  });
});
