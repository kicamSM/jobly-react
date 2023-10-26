import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";

test("it should render when logged out", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/signup"]}>
      <UserProvider user={null}>
          <Home />
      </UserProvider>
    </MemoryRouter>,
  );
  expect(screen.getByText('Jobly')).toBeInTheDocument();
  expect(screen.getByText('All the jobs in one, convenient place.')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Signup')).toBeInTheDocument();
}); 

it("matches snapshot when logged out", function() {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/signup"]}>
      <UserProvider user={null}>
          <Home />
      </UserProvider>
    </MemoryRouter>,
  );
    expect(asFragment()).toMatchSnapshot();
});
  

test("it should render when logged in", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/signup"]}>
      <UserProvider>
          <Home />
      </UserProvider>
    </MemoryRouter>,
  );
  expect(screen.getByText('Jobly')).toBeInTheDocument();
  expect(screen.getByText('All the jobs in one, convenient place.')).toBeInTheDocument();
  expect(screen.getByText('Welcome Back, testfirst!')).toBeInTheDocument();
}); 

it("matches snapshot when logged in", function() {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/signup"]}>
      <UserProvider>
          <Home />
      </UserProvider>
    </MemoryRouter>,
  );
    expect(asFragment()).toMatchSnapshot();
});
  