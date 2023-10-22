import React, { useState, useContext, useEffect } from "react";
import "./CardComponent.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    Button
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
  import UserContext from "../UserContext";


  function CardComponent({company, job, apply}) {
    const [ button, setButton ] = useState("Apply");
    const [ buttonClicked, setButtonClicked ] = useState(false)
    let info = company !== undefined ? company : job;
    console.log("info:", info)
    const { user } = useContext(UserContext);  

    useEffect(() => {
      if(job) {
      const isApplied = user.applications.includes(job.id);
      setButton(isApplied ? "Applied" : "Apply");
      }
    }, [user.applications]);

    async function handleClick() {

      let result = await apply(user.username, job.id); 
      if(result.success) {
        setButton("Applied")
        console.log("applied to:", job, job.id)
        console.log("applied to job")
        console.log("USER that applied to job:", user)
      }

    }
      
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
                {job && <Button className="CardComponent-Button" onClick={handleClick} disabled={buttonClicked}>{button}</Button>}
              </CardBody>
            </Card>
          </section>
        );
  }
  
  export default CardComponent
