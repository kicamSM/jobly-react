import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

test("it should render", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/signup"]}>
      <UserProvider>
        {/* <Route path="/signup"> */}
          <Home />
        {/* </Route> */}
      </UserProvider>
    </MemoryRouter>,
  );
  expect(screen.getByText('Jobly')).toBeInTheDocument();
  expect(screen.getByText('All the jobs in one, convenient place.')).toBeInTheDocument();
  expect(screen.getByText('Welcome Back, testFirst!')).toBeInTheDocument();
}); 

// it("matches snapshot", function() {
//     const { asFragment } = render(<Home />);
//     expect(asFragment()).toMatchSnapshot();
// });
  