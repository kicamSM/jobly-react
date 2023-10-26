import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../../testUtils";

const user = {
    username: "testuser",
    first_name: "testfirst",
    last_name: "testlast",
    email: "test@test.net",
    photo_url: null,
  };

it("Renders without crashing with no user", function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider>
          <Route path="/signup">
            <ProfileForm />
          </Route>
        </UserProvider>
      </MemoryRouter>,
    );
 })

 function ProfileFormWithState() {
    const [userState, setUserState] = useState(user);
  
    return (
      <ProfileForm user={userState} />
    );
  }

test('Should display "Create a profile with no user"', () => {
    const { asFragment } = render(
        <MemoryRouter initialEntries={["/signup"]}>
            <UserProvider>
            <Route path="/signup">
                <ProfileForm />
            </Route>
            </UserProvider>
        </MemoryRouter>,
        );
expect(screen.getByText('Create a Profile')).toBeInTheDocument();
});


// ! NOte this is not working come back to it
test('Should display "Users profile with no user"', async () => {
    const { asFragment } = await render(
        <MemoryRouter initialEntries={["/profile"]}>
            <UserProvider>
            <Route path="/profile">
                <ProfileForm user={user} />
            </Route>
            </UserProvider>
        </MemoryRouter>,
        );
expect(await screen.getByText("testsfirst's profile")).toBeInTheDocument();
});

