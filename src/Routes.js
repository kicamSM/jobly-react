import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./home/Home";
import JoblyApi from "./Api";
import { Route, Switch } from "react-router-dom";
import InfoPage from "./InfoPage"
import NotFound from "./404";
import LoginForm from "./forms/LoginForm";
import ProfileForm from "./forms/ProfileForm"
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import JobList from "./jobs/JobList";


function Routes({login, signup, update}) {
    const [isLoading, setIsLoading] = useState(true);
   
    // const [jobs, setJobs] = useState([]);


    //   /** API get request for companies */
  
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

    // //   /** API get request for jobs */
    // useEffect(() => {
    //   async function getJobs() {
    //     let jobs = await JoblyApi.getJobs();
    //     setJobs(jobs);
    //     // setIsLoading(false);
    //   }
    //   getJobs();
    // }, []);
  
 
  
    //     /** Add new company to compnaies. */
    // const addCompany = company => {
    //   let newCompany = { ...company };
    //   setCompanies(companies => [...companies, newCompany]);
   
    // };

       //   /** Add new job to jobs. */
    // const addJob = job => {
    //     let newJob = { ...job};
    //     setJobs(jobs => [...jobs, newJob]);
    //   };

    //  /**Post new company to API. */
    // async function addCompanies(company) {
    //   await JoblyApi.addCompanies(company)
    // }

    //   /**Post new job to API. */
    // async function addJobs(job) {
    //   await JoblyApi.addJobs(job)
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
    <CompanyList />
      {/* <InfoPage companies={companies} /> */}
    </Route>
    <Route exact path="/jobs">
    <JobList  />
      {/* <InfoPage  jobs={jobs}/> */}
    </Route>
    <Route exact path="/login">
        <LoginForm login={login}/>
    </Route>
    <Route exact path="/signup">
      <ProfileForm  signup={signup}/>
      {/* if token can display user data in form */}
    </Route>
    <Route path="/companies/:name">
        {/* will display details of company */}
      
      <CompanyDetail />
    </Route>
    <Route path="/profile">
      <ProfileForm  update={update}/>
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)
}

export default Routes