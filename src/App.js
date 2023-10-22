import { BrowserRouter, Redirect } from "react-router-dom";
import './App.css';
import NavBar from "./navbar/NavBar";
import Routes from './Routes';
import JoblyApi from "./Api";
import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import jwt from "jsonwebtoken";
import UserContext from "./UserContext";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState([]);
  // const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  // ! come back to this useLocalStorage
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const history = useHistory();
  console.log("history!!!!:", history)

// useEffect(() => {
//   const setTokenToLocalStorage = (token) => {
//     const stringToken = JSON.stringify(token);
//     useLocalStorage.setItem('token', stringToken);
//   };
//   }, [token]);

//   useEffect(() => {
//     const setUserToLocalStorage = (token) => {
//       const stringToken = JSON.stringify(token);
//       useLocalStorage.setItem('token', stringToken);
//     };
//     }, [token]);


  // useEffect(() => {
  //   async function getUser() {
  //     let user = await JoblyApi.getUser();
  //     console.log('user in Routes', user)
  //     setUser(user);
  //     // setIsLoading(false);
  //   }
  //   getUser();
  // }, []);

  // console.log("user:", user)

  // useEffect(() => {
  //   async function addUser(userData) {
  //     let user = await JoblyApi.addUser(userData);
  //     console.log('user in Routes', user)
  //     addUser();
  //     // setIsLoading(false);
  //   }
  //   addUser();
  // }, []);

 // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(function loadUser() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          console.log("username:", username)
          JoblyApi.token = token;
          let user = await JoblyApi.getUser(username);
          console.log("user:", user)
          console.log("user.firstName:", user.firstName)
          setUser(user);
          setApplicationIds(new Set(user.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setUser(null);
        }
      }
      // setInfoLoaded(true);
      console.log("setinfoloaded true")
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    // setInfoLoaded(false);
    console.log("setinfoloaded false")
    getUser();
  }, [token]);

  async function signup(userData) {
    let token = JoblyApi.signup(userData); 
    setToken(token);
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    // try {
      console.log("token in logout before setting token:", token)
      setToken(null);
      console.log("token in logout after setting token:", token)
      // history.push('/login');
      // redirect()
      // return <Redirect to="/login" />;
      // return { success: true };
      // return <Navigate to="/login" replace={true} />;
    // } catch (errors) {
    //   console.error("logout failed", errors);
    //   return { success: false, errors };
    // }

  }

  async function update(username, data) {
    try {
      let token = await JoblyApi.update(username, data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("update failed", errors);
      return { success: false, errors };
    }
  }

console.log("user!!!!:", user)

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
        {/* <NavBar logout={logout} history={history}/> */}
        <NavBar logout={logout} user={user} />
        <main>
          <Routes login={login} signup={signup} update={update} />
        </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
