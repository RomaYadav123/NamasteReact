import HeaderComponent from "../HeaderComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "/src/utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("All the Header testcases", () => {
  test("testing for login button present or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    //Querying
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("testing for cart items rendering or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    //Querying
    const cart = screen.getByText("(0 Items)");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("testing for login button changes to logout or not onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    //Querying
    const LoginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(LoginButton);

    const LogoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(LogoutButton).toBeInTheDocument();
  });
});
