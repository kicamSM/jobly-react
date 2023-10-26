import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Routes from "../routes/Routes";
import UserContext from "../repeated/UserContext";
import JoblyApi from "../Api";
import Loading from "../repeated/loading/Loading"
import './App.css';
import useLocalStorage from "../hooks/useLocalStorage";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "jobly-token";

  /**  
  * App
  */

function App() {

   /** Set user and application ids in state, set token in local storage, and set history*/


  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function loadUser() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    /** If token then API get request for user using username after decoding token if value of token changes rerun. */

    async function getUser() {
      if (token) {

        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let user = await JoblyApi.getUser(username);
          setUser(user);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setUser(null);
        }
      }
      setIsLoading(false);
      console.log("setinfoloaded true")
    }
    getUser();
  }, [token]);

  /** API post request for user signup or return error */

  async function signup(userData) {
    try {
    let token = await JoblyApi.signup(userData); 
    setToken(token);
    return { success: true};
    } catch (errors) {
      console.log("signup failed", errors);
      return {success: false, errors};
    }
  }

  /** API post request for user login or return error */

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

  /** Logout - clear token and user */

  function logout() {
      setToken(null);
      setUser(null);
  }

  /** API patch request for user update or return error */

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

  /** API post request for job application or return error */

async function apply(username, id) {
  try {
    let token = await JoblyApi.apply(username, id);
    setToken(token);
    return { success: true };
  } catch (errors) {
    console.error("applied to job failed", errors);
    return { success: false, errors };
  }
}

  /** Display isLoading if API call is has not returned */

  if (isLoading) {
    return (
        <Loading />
    )
  }

  /** Render App */

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <NavBar logout={logout} />
          <main>
            <Routes login={login} signup={signup} update={update} apply={apply} />
          </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
