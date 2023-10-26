import React from 'react';
import { render } from '@testing-library/react';
import CompanyDetail from './CompanyDetail';
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";


it("Renders without crashing", function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
          <Route path="/company/:handle">
            <CompanyDetail />
          </Route>
        </UserProvider>
      </MemoryRouter>,
    );
 })

it("matches snapshot", function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
          <Route path="/company/:handle">
            <CompanyDetail />
          </Route>
        </UserProvider>
      </MemoryRouter>,
    );
  
    // Mock the `getCompanyJobs` and `getCompany` functions so that they
    // return a fixed set of data.
    jest.mock("../Api", () => {
      const JoblyApi = {
        companyJobs: async () => {
          return [{
            id: 1,
            title: "Software Engineer",
            description: "Develop and maintain software applications.",
            salary: 100000,
            equity: 0.01,
          }];
        },
        getCompany: async () => {
          return {
            name: "IBM",
            description: "IBM is a global technology company.",
          };
        },
      };
  
      return {
        JoblyApi,
      };
    });
  
    // Render the component again with the mocked functions.
    const { asFragment: snapshot } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <UserProvider>
          <Route path="/company/:handle">
            <CompanyDetail />
          </Route>
        </UserProvider>
      </MemoryRouter>,
    );
  
    expect(snapshot()).toMatchSnapshot();
  });
