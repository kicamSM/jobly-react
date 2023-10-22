import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../Api";
import CardComponent from "../repeated/CardComponent";
import SearchBar from "../repeated/SearchBar";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function JobList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    // const [jobs, setJobs] = useState([]);
    const history = useHistory()
    
    const { user } = useContext(UserContext);

    if(!user) {
      history.push("/")
    }

  //   /** API get request for jobs */
    async function getJobs(title) {
      // let name = "anderson"
      let jobs = await JoblyApi.getJobs(title);
      console.log('jobs in JobsList', jobs);
      setJobs(jobs);
      // setIsLoading(false);
    }

   /** Reloading companies when it changes request for companies */
    useEffect(() => {
        getJobs();
    }, []);


    // const companyCards = companies.map((company) => {
    //   const id = uuid();
    //   return <CompanyCard key={id} company={company} />;
    // });

    const renderCards = () => {
      return (
        <div className="JobList">
            <ul>
                {jobs.map(job => (
                  <CardComponent job={job} />
                ))}
            </ul>
          </div>
        );
    }
  

    return (
      <div className="JobList">
        <SearchBar getJobs={getJobs}/>
        {/* {companyCards} */}
        {renderCards()}
      </div>
    );

}

export default JobList