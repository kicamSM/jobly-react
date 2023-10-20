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
          {/* <NavLink exact to={`/companies/${info.handle}`} className="CompanyCard-Link" > */}
            <Card className="CardComponent"> 
              <CardBody>
                <CardTitle className="text-center CardComponent-Title">
                  {info.name} {info.title}
                </CardTitle>
                <CardText className="CardComponent-Text">
                  {info.description} {info.equity && `equity: ${info.equity} `}
                </CardText>
                <CardText className="CardComponent-Text">
                {info.salary && `salary: ${info.salary}`}{" "}
                </CardText>
              </CardBody>
            </Card>
          {/* </NavLink> */}
          </section>
        );
  }
  
  export default CardComponent

// function CompanyCard({company}) {
//   console.log("company:", company)
// console.log('company card is running')
  


//     return (
//         <section key={company.handle}>
//         <NavLink exact to={`/companies/${company.handle}`} className="CompanyCard-Link" >
//           <Card className="CompanyCard"> 
//             <CardBody>
//               <CardTitle className="text-center CompanyCard-Title">
//                 {company.name} {company.title}
//               </CardTitle>
//               <CardText className="CompanyCard-Text">{company.description} {company.salary} {company.equity}</CardText>
//             </CardBody>
//           </Card>
//         </NavLink>
//         </section>
//       );
// }

// export default CompanyCard