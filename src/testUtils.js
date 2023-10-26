import React from "react";
import UserContext from "./repeated/UserContext";

const demoUser = {
  username: "testuser",
  firstName: "testfirst",
  lastName: "testlast",
  email: "test@test.net",
  photo_url: null,
};

const UserProvider =
    ({ children, user = demoUser, apply = () => false }) => (
    <UserContext.Provider value={{ user, apply }}>
      {children}
    </UserContext.Provider>
);

export { UserProvider };
