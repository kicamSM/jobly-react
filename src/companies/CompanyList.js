import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../Api";
// import CompanyCard from "./CompanyCard";
import CardComponent from "../repeated/CardComponent";
import SearchBar from "../repeated/SearchBar";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const { user } = useContext(UserContext);
    const history = useHistory();
    // const [jobs, setJobs] = useState([]);

    if(!user) {
      history.push("/")
    }

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
      // return (
      //   <div className="CompanyList">
      //       <ul>
      //           {companies.map(company => (
      //             <CompanyCard company={company} />
      //           ))}
      //       </ul>
      //     </div>
      //   );
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
        {/* {companyCards} */}
        {renderCards()}
      </div>
    );

}

export default CompanyList