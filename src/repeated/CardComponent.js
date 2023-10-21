import React from "react";
import "./CardComponent.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";
  import { NavLink } from "react-router-dom";

  function CardComponent({company, job}) {
    let info = company !== undefined ? company : job
    console.log("info:", info)
    
  
      return (
          <section key={info.handle}>
            <Card className="CardComponent"> 
              <CardBody>
                  <NavLink exact to={`/companies/${info.handle}`} className="CompanyCard-Link" >
                <CardTitle className="text-center CardComponent-Title">
                  {info.name} 
                </CardTitle>
                 </NavLink>
                 <CardTitle> 
                 {info.title}
                 </CardTitle>
                <CardText className="CardComponent-Text">
                  {info.description} {info.equity && `equity: ${info.equity} `}
                </CardText>
                <CardText className="CardComponent-Text">
                {info.salary && `salary: ${info.salary}`}{" "}
                </CardText>
              </CardBody>
            </Card>
          </section>
        );
  }
  
  export default CardComponent
