import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../Api";
import { useParams} from "react-router-dom";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CardComponent from "../repeated/CardComponent";



function CompanyDetail({apply}) {
    const handle = useParams(); 
    const history = useHistory();
    const [jobs, setJobs ] = useState([]);
    
    const { user } = useContext(UserContext);
    // const [appliedJobs, setAppliedJobs] = useState([]);
    // console.log("USER IN COMPANYDETAILS:", user)

    // console.log("handle:", handle.name)
    // let name = handle.name

    if(!user) {
      history.push("/")
    }

    // useEffect(() => {
  
    //   //   /** API get request for a company's jobs */

    //   async function getCompanyJobs() {
    //     let jobs = await JoblyApi.companyJobs(handle.name);
    //     console.log('jobs in companyDetails', jobs)
    //     setJobs(jobs);
    //     // setIsLoading(false);
    //   }

    //   getCompanyJobs();
    // }, []);


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

  // function handleApply(job) {
  //   setAppliedJobs([...appliedJobs, job.id]);
  // }


    const renderCards = () => {
      return (
        <div className="CompanyDetail-JobList">
            <ul>
                {/* {jobs.map(job => (
                  <CardComponent job={job} apply={apply} isDisabled={appliedJobs.includes(job.id)}
                  handleApply={handleApply}/>
                ))} */}
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