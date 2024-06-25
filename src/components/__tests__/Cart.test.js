import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import RestrauantMenu from "../RestraunantMenu";
import MOCK_DATA from "/src/utils/mockData";
import {Provider} from "react-redux";
import appStore from "/src/utils/appStore";
import {BrowserRouter} from "react-router-dom";


global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=> return Promise.resolve(MOCK_DATA)
    })
})


test("testing each cart flow by loading Restrauant Menu component", async () => {
  await act(async () => render(<BrowserRouter><Provider store={appStore}><RestrauantMenu /></Provider></BrowserRouter>));
});
