import React, { useState, useEffect } from "react";
import "./CompanyCard.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
  import { NavLink } from "react-router-dom";


function CompanyCard({company}) {
console.log('company card is running')
  


    return (
        <section key={company.handle}>
        <NavLink exact to={`/companies/${company.handle}`} className="CompanyCard-Link" >
          <Card className="CompanyCard"> 
            <CardBody>
              <CardTitle className="text-center CompanyCard-Title">
                {company.name}
              </CardTitle>
              <CardText className="CompanyCard-Text">{company.description}</CardText>
            </CardBody>
          </Card>
        </NavLink>
        </section>
      );
    // return (
    //     <div key={company.handle}>
    //         {company.name}
    //     </div>
    // )

}

export default CompanyCard