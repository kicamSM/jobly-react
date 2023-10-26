import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../../testUtils";


it("Renders without crashing with no user", function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <UserProvider>
            <ProfileForm />
        </UserProvider>
      </MemoryRouter>,
    );
 })


test('Should display "Create a profile with user"', () => {
    const { asFragment } = render(
        <MemoryRouter initialEntries={["/signup"]}>
            <UserProvider>
                <ProfileForm />
            </UserProvider>
        </MemoryRouter>,
        );
expect(screen.getByText("testuser's Profile")).toBeInTheDocument();
});


test('Should display "Users profile with no user"', async () => {
    const { asFragment } = await render(
        <MemoryRouter initialEntries={["/profile"]}>
            <UserProvider user={null}>
                <ProfileForm />
            </UserProvider>
        </MemoryRouter>,
        );
expect(await screen.getByText("Create a Profile")).toBeInTheDocument();
});

