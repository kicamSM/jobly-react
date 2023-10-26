import React, {useState, useEffect} from "react";
import UserContext from "./repeated/UserContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
};

// ! this does not appear to be passing in the user....

const UserProvider =
    ({ children, user = demoUser, apply = () => false }) => (
    <UserContext.Provider value={{ user, apply }}>
      {children}
    </UserContext.Provider>
);


// const UserProvider = ({ user, children }) => {
//   const [userState, setUserState] = useState(null);

//   useEffect(() => {
//     if (user === null) {
//       setUserState({
//         username: "testuser",
//         first_name: "testfirst",
//         last_name: "testlast",
//         email: "test@test.net",
//         photo_url: null,
//       });
//     } else {
//       setUserState(user);
//     }
//   }, [user]);

//   return <UserProvider user={userState}>{children}</UserProvider>;
// };



// const UserProvider =
//   ({ children, user = demoUser, hasAppliedToJob = () => false }) => (
//     <UserContext.Provider
 
// value={{
 
// user, hasAppliedToJob }}>
//       {children}
//     </UserContext.Provider>
//   );

export { UserProvider };
