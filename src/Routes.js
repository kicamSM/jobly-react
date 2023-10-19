import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import API from "./Api";
import { Route, Switch } from "react-router-dom";
import InfoPage from "./InfoPage"
import NotFound from "./404";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm"


function Routes() {
    const [isLoading, setIsLoading] = useState(true);
    // const [snacks, setSnacks] = useState([]);
    // const [drinks, setDrinks] = useState([]);
  
    
      /** API get request for snacks */
  
    // useEffect(() => {
    //   async function getSnacks() {
    //     let snacks = await SnackOrBoozeApi.getSnacks();
    //     console.log('snacks in Routes', snacks)
    //     setSnacks(snacks);
    //     setIsLoading(false);
    //   }
    //   getSnacks();
    // }, []);

    //   /** API get request for drinks */
    // useEffect(() => {
    //   async function getDrinks() {
    //     let drinks = await SnackOrBoozeApi.getDrinks();
    //     setDrinks(drinks);
    //     setIsLoading(false);
    //   }
    //   getDrinks();
    // }, []);
  
    //   /** Add new drink to drinks. */
    // const addDrink = drink => {
    //     let newDrink = { ...drink};
    //     setDrinks(drinks => [...drinks, newDrink]);
    //   };
  
    //     /** Add new snacks to snack. */
    // const addSnack = snack => {
    //   let newSnack = { ...snack };
    //   setSnacks(snacks => [...snacks, newSnack]);
   
    // };

    //  /**Post new snack to API. */
    // async function addSnacks(snack) {
    //   await SnackOrBoozeApi.addSnacks(snack)
    // }

    //   /**Post new drink to API. */
    // async function addDrinks(drink) {
    //   await SnackOrBoozeApi.addDrinks(drink)
    // }



    // if (isLoading) {
    //     return <p>Loading...</p>;
    //   }

return (
    <Switch>
    <Route exact path="/">
      <Home  />
    </Route>
    <Route exact path="/companies">
      <InfoPage  />
    </Route>
    <Route exact path="/jobs">
      <InfoPage  />
    </Route>
    <Route exact path="/login">
        <LoginForm  />
    </Route>
    <Route exact path="/signup">
      <ProfileForm />
    </Route>
    <Route path="/companies/:name">
        {/* will display detais of company */}
      <InfoPage />
    </Route>
    <Route path="/profile">
      <ProfileForm  />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)
}

export default Routes