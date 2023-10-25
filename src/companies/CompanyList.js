import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../Api";
import CardComponent from "../repeated/cardComponents/CardComponent";
import SearchBar from "../repeated/searchBar/SearchBar";



function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

  //   /** API get request for companies */
    async function getCompanies(name) {
      let companies = await JoblyApi.getCompanies(name);
      // console.log('companies in Routes', companies)
      setCompanies(companies);
      // setIsLoading(false);
    }

   /** Reloading companies when it changes request for companies */
    useEffect(() => {
    getCompanies();
  }, []);

    const renderCards = () => {
      return (
        <div className="CompanyList">
            <ul>
                {companies.map(company => (
                  <CardComponent company={company} />
                ))}
            </ul>
          </div>
        );
    }
  

    return (
      <div className="CompanyList">
        <SearchBar getCompanies={getCompanies}/>
        {renderCards()}
      </div>
    );

}

export default CompanyList