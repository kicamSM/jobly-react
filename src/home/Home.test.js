import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("it should render", () => {
  const numDrinks = 5;
  const numSnacks = 6;

  render(<Home numDrinks={numDrinks} numSnacks={numSnacks} />);
}); 

it("matches snapshot", function() {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});
  