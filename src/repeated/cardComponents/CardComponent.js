import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
  import UserContext from "../UserContext";
import "./CardComponent.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
  } from "reactstrap";
  

  
  /**  
  * Card component for jobs, companies, and company jobs. 
  */

  function CardComponent({company, job, apply}) {

    /** Get user from context, set button, and disable in state, and determine if dealing with company or job*/

    const [ button, setButton ] = useState("Apply");
    const [ disable, setDisable ] = useState(false);
    let info = company !== undefined ? company : job;
    let key = company !== undefined ? info.handle : info.id;

    // let id = "Card-Component-";
    // let key = id + keyInfo;
  
    const { user } = useContext(UserContext);  
    

    
    /** Reloading jobs when it changes request for users applications */

    useEffect(() => {

      if(job) {
        const isApplied = user.applications.includes(job.id);
        setButton(isApplied ? "Applied" : "Apply");
        setDisable(isApplied);
      }
    }, [user.applications]);


    /** Handle click of button  */

    async function handleClick(e) {
      e.preventDefault(); 

      let result = await apply(user.username, job.id); 

      if(result.success) {
        setButton("Applied");
        setDisable(true);
        user.applications.push(job.id);
      } 

    }

     /** Render the card component */
      
      return (
          <section key={"Card-Component-" + key}>
            <Card className="CardComponent"> 
              <CardBody>
                  <NavLink exact to={`/companies/${info.handle}`} className="CompanyCard-Link">
                <CardTitle className="text-center CardComponent-Title">
                  {info.name} 
                </CardTitle>
                  </NavLink>
                 <CardTitle> 
                 <h4>{info.title}</h4>
                 </CardTitle>
                <CardText className="CardComponent-Text">
                  {info.description}
                </CardText>
                <img className="CardComponent-Text" src={info.logoUrl}></img>
                <CardText className="CardComponent-Text">
                {info.equity && `equity: ${info.equity} `}
                </CardText>
                <CardText className="CardComponent-Text">
                {info.salary && `salary: ${info.salary}`}
                </CardText>
                  {job && <Button className={`CardComponent-Button`}onClick={handleClick} disabled={disable}>{button}</Button>}
              </CardBody>
            </Card>
         </section>
        );
  }
  
  export default CardComponent
