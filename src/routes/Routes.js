import React, { useState } from "react";
import Home from "../home/Home";
import { Route, Switch } from "react-router-dom";
import NotFound from "../404";
import LoginForm from "../forms/loginForm/LoginForm";
import ProfileForm from "../forms/profilForm/ProfileForm"
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import Redirect from "../repeated/Redirect";


function Routes({login, signup, update, apply}) {
    const [isLoading, setIsLoading] = useState(true);
   


    // if (isLoading) {
    //     return <p>Loading...</p>;
    //   }

return (
    <Switch>
    <Route exact path="/">
      <Home  />
    </Route>
    <Route exact path="/companies">
      <Redirect />
      <CompanyList />
    </Route>
    <Route exact path="/jobs">
      <Redirect />
      <JobList apply={apply} />
    </Route>
    <Route exact path="/login">
        <LoginForm login={login}/>
    </Route>
    <Route exact path="/signup">
      <ProfileForm  signup={signup}/>
    </Route>
    <Route path="/companies/:name">
      <Redirect />
      <CompanyDetail apply={apply}/>
    </Route>
    <Route path="/profile">
      <Redirect />
      <ProfileForm  update={update}/>
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)
}

export default Routes