import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CompanyCard from "./CompanyCard";
import SearchBar from "../SearchBar";


function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    // const [jobs, setJobs] = useState([]);


  //   /** API get request for companies */
    async function getCompanies(name) {
      // let name = "anderson"
      let companies = await JoblyApi.getCompanies(name);
      console.log('companies in Routes', companies)
      setCompanies(companies);
      // setIsLoading(false);
    }

   /** Reloading companies when it changes request for companies */
    useEffect(() => {
    //   getCompanies(name);
    // }, [search]);
    getCompanies();
  }, []);


    // const companyCards = companies.map((company) => {
    //   const id = uuid();
    //   return <CompanyCard key={id} company={company} />;
    // });

    const renderCards = () => {
      return (
        <div className="CompanyList">
            <ul>
                {companies.map(company => (
                  <CompanyCard company={company} />
                ))}
            </ul>
          </div>
        );
    }
  

    return (
      <div className="CompanyList">
        <SearchBar getCompanies={getCompanies}/>
        {/* {companyCards} */}
        {renderCards()}
      </div>
    );

}

export default CompanyList