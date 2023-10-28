import React from 'react';
import { render, screen } from '@testing-library/react';
import CardComponent from './CardComponent'
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../testUtils";

describe("CardComponent", () => {
    it("should render the card component", () => {
      const { asFragment } = render(

        <MemoryRouter initialEntries={["/companies/:handle"]}>
          <UserProvider >
              <CardComponent 
                 company={{ name: "Google" }}/>
          </UserProvider>
        </MemoryRouter>
      )
      expect(screen.getByText('Google')).toBeInTheDocument();
     
    });
})
