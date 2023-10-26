import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";
import { Nav } from 'reactstrap';

test("it should render when logged out", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider user={null}>
            <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Jobly')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
  }); 

  it("matches snapshot when logged out", function() {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider user={null}>
            <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
      expect(asFragment()).toMatchSnapshot();
  });
    

test("it should render when logged in", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider >
            <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText('Jobly')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Logout testfirst')).toBeInTheDocument();
    expect(screen.getByText('Jobs')).toBeInTheDocument();
    expect(screen.getByText('Companies')).toBeInTheDocument();
  }); 

  it("matches snapshot when logged in", function() {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider >
            <NavBar />
        </UserProvider>
      </MemoryRouter>,
    );
      expect(asFragment()).toMatchSnapshot();
  });
