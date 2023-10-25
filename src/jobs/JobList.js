import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CardComponent from "../repeated/cardComponents/CardComponent";
import SearchBar from "../repeated/searchBar/SearchBar";


/**
 * Display jobs page
 */

function JobList({apply}) {

    /** Set jobs and is loading in state*/

    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

  /** API get request for jobs */

    async function getJobs(title) {
      try{
        let jobs = await JoblyApi.getJobs(title);
        console.log("jobs:", jobs)
        setJobs(jobs);
      } catch (errors) {
      console.log("signup failed", errors);
      return {success: false, errors};
    }
     setIsLoading(false); 
    }

   /** Reloading jobs when it changes request for jobs */

    useEffect(() => {
        getJobs();
    }, []);


  /** Display isLoading if API call is has not returned */

    if (isLoading) {
      return <p>Loading...</p>;
    }

  /** Render the cards for jobs */

    const renderCards = () => {
      return (
        <div className="JobList">
            <ul>
                {jobs.map(job => (
                  <CardComponent job={job} apply={apply} />
                ))}
            </ul>
          </div>
        );
    }
  
  /** Render search bar and cards */

    return (
      <div className="JobList">
        <SearchBar getJobs={getJobs}/>
        {renderCards()}
      </div>
    );

}

export default JobList;