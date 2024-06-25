import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestrauantCard from "../RestrauantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

describe("Chceking for Restrauant card component", () => {
  test("Checking if the Restrauant Card is coming or not", () => {
    render(<RestrauantCard resData={MOCK_DATA} />);

    //Qerying//
    const card = screen.getByText("Subway");

    //Assertion//
    expect(card).toBeInTheDocument();
  });

  test("Checking if the Restrauant Card has promotion label or not", () => {
    render(<RestrauantCard resData={MOCK_DATA} />);

    //Qerying//
    const promotionLabel = screen.getByTestId("label");

    //Assertion//
    expect(promotionLabel).toBeInTheDocument();
  });
});
