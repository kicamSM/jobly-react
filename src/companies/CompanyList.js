import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CardComponent from "../repeated/cardComponents/CardComponent";
import SearchBar from "../repeated/searchBar/SearchBar";
import Loading from "../repeated/loading/Loading"


/**
 * Display companies page
 */

function CompanyList() {

   /** Set companies and is loading in state*/

    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    

  //   /** API get request for companies */

    async function getCompanies(name) {
      let companies = await JoblyApi.getCompanies(name);
      setCompanies(companies);
      setIsLoading(false);
    }

   /** Reloading companies when it changes request for companies */

    useEffect(() => {
    getCompanies();
  }, []);


    /** Display isLoading if API call is has not returned */

    if (isLoading) {
      return (
          <Loading />
      )
    }

     /** Renders the cards for companies */

    const renderCards = () => {
      return (
        <div className="CompanyList" >
            <ul>
                {companies.map(company => (
                  <CardComponent company={company} key={company.handle}/>
                ))}
            </ul>
          </div>
        );
    }
  
    /** Renders search bar and render cards */

    return (
      <div className="CompanyList">
        <SearchBar getCompanies={getCompanies}/>
        {renderCards()}
      </div>
    );

}

export default CompanyList