import React, { useState, useContext, useEffect } from "react";
import "./CardComponent.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
  import UserContext from "../UserContext";


  function CardComponent({company, job, apply}) {
    const [ button, setButton ] = useState("Apply");
    const [ disable, setDisable ] = useState(false);
    let info = company !== undefined ? company : job;
    const { user } = useContext(UserContext);  

    useEffect(() => {
      if(job) {
      // console.log("job****!!!:", job)
      console.log("user.applications in useEffect:", user.applications)
      const isApplied = user.applications.includes(job.id);
      setButton(isApplied ? "Applied" : "Apply");
      // console.log("button!!!!:", button)
      // console.log("isApplied:", isApplied)
      setDisable(isApplied);
      }
    }, [user.applications]);

    async function handleClick(e) {
      e.preventDefault(); 
      let result = await apply(user.username, job.id); 
      if(result.success) {
        setButton("Applied");
        setDisable(true);
        // console.log("user in handleClick:", user)
        // console.log("user.applications in handle click:", user.applications)
        // ! this is adding the job.id to the user in localStorage vs recalling the user from the API but since you already made the api call the application is showing
        user.applications.push(job.id)
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
                   {job && <Button className={`CardComponent-Button`}onClick={handleClick} disabled={disable}>{button}</Button>}
              </CardBody>
            </Card>
          </section>
        );
  }
  
  export default CardComponent
