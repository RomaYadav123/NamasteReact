import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("All the Contact testcases here", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    //this is Quering & it will return you a virtual DOM obj or piecec of jsx, react-fiber, etc
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should have text as Mobile", () => {
    render(<Contact />);

    //this is Quering & it will return you a virtual DOM obj or piecec of jsx, react-fiber, etc
    const mobile = screen.getByText("Mobile");

    //Assertion
    expect(mobile).toBeInTheDocument();
  });
});
