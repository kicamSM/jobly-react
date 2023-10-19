import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import JoblyApi from "./Api";
import { Route, Switch } from "react-router-dom";
import InfoPage from "./InfoPage"
import NotFound from "./404";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm"


function Routes() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);
  
    
      /** API get request for companies */
  
    useEffect(() => {
      async function getCompanies() {
        let companies = await JoblyApi.getCompany();
        console.log('companies in Routes', companies)
        setCompanies(companies);
        // setIsLoading(false);
      }
      getCompanies();
    }, []);

    //   /** API get request for jobs */
    useEffect(() => {
      async function getJobs() {
        let jobs = await JoblyApi.getJobs();
        setJobs(jobs);
        // setIsLoading(false);
      }
      getJobs();
    }, []);
  
 
  
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
      <InfoPage companies={companies} />
    </Route>
    <Route exact path="/jobs">
      <InfoPage  jobs={jobs}/>
    </Route>
    <Route exact path="/login">
        <LoginForm  />
    </Route>
    <Route exact path="/signup">
      <ProfileForm />
    </Route>
    <Route path="/companies/:name">
        {/* will display details of company */}
      
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