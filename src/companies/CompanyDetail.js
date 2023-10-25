import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import { useParams} from "react-router-dom";
import CardComponent from "../repeated/cardComponents/CardComponent";



function CompanyDetail({apply}) {

    const handle = useParams(); 
    const [jobs, setJobs ] = useState([]);


    //   /** API get request for a company's jobs */

    async function getCompanyJobs() {
    let jobs = await JoblyApi.companyJobs(handle.name);
    console.log('jobs in companyDetails', jobs)
    setJobs(jobs);
    // setIsLoading(false);
  }
   
  useEffect(() => {
    getCompanyJobs();
  }, []);

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
  

    return (
      <div className="CompanyDetail">
        {renderCards()}
      </div>
    );
  

}

export default CompanyDetail