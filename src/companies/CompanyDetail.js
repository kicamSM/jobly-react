import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import { useParams} from "react-router-dom";
import CardComponent from "../repeated/cardComponents/CardComponent";
import Loading from "../repeated/loading/Loading";

/**  
 * Company detail form
 */

function CompanyDetail({apply}) {

   /** Get url handle and set jobs and is loading in state*/
    // console.log("company:", company)
    const handle = useParams(); 
    const [jobs, setJobs ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany]= useState("");

    //   /** API get request for a company's jobs */

    async function getCompanyJobs() {
      let jobs = await JoblyApi.companyJobs(handle.name);
      setJobs(jobs);
      setIsLoading(false);
    }

  //   /** API get request for a company */ 

    async function getCompany() {
      let company = await JoblyApi.getCompany(handle.name);
      setCompany(company);
    }

    /** Reloading company jobs when it changes request for company jobs */
   
    useEffect(() => {
      getCompanyJobs();
      getCompany();
    }, []);

    /** Display isLoading if API call is has not returned */

    if (isLoading) {
      return (
          <Loading />
      )
    }

    /** Return the cards for company jobs */

    const renderCards = () => {
      return (
        <div className="CompanyDetail-JobList">
            <ul>
                 {jobs.map(job => (
                  <CardComponent job={job} apply={apply} key={"Company-Detail-" + job.id} />
                ))}
            </ul>
          </div>
        );
    }

    /** Render cards */

    return (
      <div className="CompanyDetail">
        { company && <h3>{company.name}</h3> } 
        { company && <h4>{company.description}</h4>}
        {renderCards()}
      </div>
    );
  

}

export default CompanyDetail