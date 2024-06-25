
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BodyComponent from "../BodyComponent";
import MOCK_DATA_API from "../mocks/resListDataMock.json";
import {act} from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: return Promise.resolve(MOCK_DATA_API),
    })
})



test("checking the Body Component is having the search button or not", async () => {
    await act(async () => 
    render(<BrowserRouter>
        <BodyComponent />
        </BrowserRouter>
        )
        ); 

        const cardsBeforeSearch = screen.getAllByTestId("resData");
        expect(cardsBeforeSearch.length).toBe(25);
  
    //Querying//
    const searchButton = screen.getByRole("button", {name: "Search"});


    const searchInput = screen.getByTestId("searchInput");


    //since there is an event here like we used onChnage in our BodyComponent so here we are simulating the same. That's why there we used e as event which was going inside the onChnage handler, so here it will be replaced with target //
    fireEvent.change(searchInput, {target : { value: "burger"}})


    //All the above vent will hap[pen on cliking the searchButton, that's why wea re using .getByClick(searchButton). //
    fireEvent.click(searchButton);

    //after hitting the searchButton the filterd list of res cards shall come & since we have alloted a data-testid="rescard" then here we will check as per that. //
   const cards = screen.getAllByTestId("rescard");

   expect(cards.length).toBe(4);


    //Assertion//
    expect(searchButton).toBeInTheDocument();
  });
  