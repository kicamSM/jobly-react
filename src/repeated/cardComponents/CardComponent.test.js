import React from 'react';
import { render, screen } from '@testing-library/react';
import CardComponent from './CardComponent'
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../testUtils";

// ! will try and come back to this. Currently not passing any companies info into this


// describe("CardComponent", () => {
//     it("should render the card component", () => {
//     //   render(<CardComponent company={{ name: "Google" }} />);
//       const { asFragment } = render(


//         <MemoryRouter initialEntries={["/companies/:handle"]}>
//           <UserProvider >
//               <CardComponent 
//                  company={{ name: "Google" }}/>
//           </UserProvider>
//         </MemoryRouter>
//       )
//       expect(screen.getByText('Google')).toBeInTheDocument();
     
//     });
// })

// 

    // expect(screen.getByText('Jobly')).toBeInTheDocument();
    // expect(screen.getByText('All the jobs in one, convenient place.')).toBeInTheDocument();
    // expect(screen.getByText('Login')).toBeInTheDocument();
    // expect(screen.getByText('Signup')).toBeInTheDocument();
//   });

// test('404 renders without crashing', () => {
//   render(<CardComponent />);
// });

// test('Not found message displays', () => {
//     render(<NotFound />);

//     const text  = screen.getByText("Sorry the page you were looking for doesn't exist.");
//     expect(text).toHaveTextContent("Sorry the page you were looking for doesn't exist.");
// });

// test('Should display "404"', () => {
//     render(<NotFound />);
  
//     expect(screen.getByText('404')).toBeInTheDocument();
//   });

// test('matches snapshot', () => {
//     const {asFragment} = render(<CardComponent />);
//     expect(asFragment()).toMatchSnapshot(); 
//   });