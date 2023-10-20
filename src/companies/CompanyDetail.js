import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import { useParams} from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";


function CompanyDetail() {
    const handle = useParams(); 
    const [company, setCompany] = useState([]);

    console.log("handle:", handle.name)

    useEffect(() => {
        async function getCompany() {
            console.log("handle in getCompany:", handle)
          let company = await JoblyApi.getCompany(handle.name);
          console.log('company in details', company)
          setCompany(company);
          // setIsLoading(false);
        }
        getCompany();
      }, []);

    // return("this is CompanyDetail")

    // ! This needs to evenutually return the jobs not the company details. 
    return (
    <section key={company.handle}>
      <Card className="CompanyCard"> 
        <CardBody>
          <CardTitle className="text-center CompanyCard-Title">
            {company.name}
          </CardTitle>
          <CardText className="CompanyCard-Text">{company.description}</CardText>
          <img src={company.logoUrl} ></img>
          {company.logoUrl}
        </CardBody>
      </Card>
    </section>
    )

}

export default CompanyDetail