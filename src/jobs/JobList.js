import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CardComponent from "../repeated/cardComponents/CardComponent";
import SearchBar from "../repeated/searchBar/SearchBar";
import Loading from "../repeated/loading/Loading"

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


  /** Display loading if API call is has not returned */

    if (isLoading) {
      return (
          <Loading />
      )
    }

  /** Render the cards for jobs */

    const renderCards = () => {
      return (
        <div className="JobList">
            <ul>
                {jobs.map(job => (
                  <CardComponent job={job} apply={apply} key={"Job-" + job.id} />
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