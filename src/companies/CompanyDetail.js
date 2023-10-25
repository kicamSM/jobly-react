import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import { useParams} from "react-router-dom";
import CardComponent from "../repeated/cardComponents/CardComponent";


/**  
 * Company detail form
 */

function CompanyDetail({apply}) {

   /** Get url handle and set jobs and is loading in state*/

    const handle = useParams(); 
    const [jobs, setJobs ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //   /** API get request for a company's jobs */

    async function getCompanyJobs() {
      let jobs = await JoblyApi.companyJobs(handle.name);
      setJobs(jobs);
      setIsLoading(false);
    }

    /** Reloading company jobs when it changes request for company jobs */
   
    useEffect(() => {
      getCompanyJobs();
    }, []);

    /** Display isLoading if API call is has not returned */

    if (isLoading) {
      return <p>Loading...</p>;
    }

    /** Return the cards for company jobs */

    const renderCards = () => {
      return (
        <div className="CompanyDetail-JobList">
            <ul>
                 {jobs.map(job => (
                  <CardComponent job={job} apply={apply} />
                ))}
            </ul>
          </div>
        );
    }

    /** Render cards */

    return (
      <div className="CompanyDetail">
        {renderCards()}
      </div>
    );
  

}

export default CompanyDetail