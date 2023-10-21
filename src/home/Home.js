import React, { useContext } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import './Home.css'
import UserContext from "../UserContext";
import { Link } from "react-router-dom";


/**
 * Display home page
 *
 */

function Home() {

  const { user } = useContext(UserContext);

  console.log("user in home:". user)

  if(user) {
    console.log("user exists in home.js!!!:", user)
    return (
      <section className="col-md-8 Home">
        <Card>
          <CardTitle>
              <div className="font-weight-bold Home-div">
                <h1>Jobly</h1>
              </div>
          </CardTitle>
          <CardBody className="text-center">
            <div>All the jobs in one, convenient place.</div>
            <h2>Welcome Back</h2>
          </CardBody>
        </Card>
      </section>
  );

  } else {
    console.log("user in home.js does not exist:", user)
    return (
      <section className="col-md-8 Home">
      <Card>
        <CardTitle>
            <div className="font-weight-bold Home-div">
              <h1>Jobly</h1>
            </div>
        </CardTitle>
        <CardBody className="text-center">
          <CardText>
          <Link className="Home-Link" to="/login">Login</Link>
          </CardText>
          <CardText>
          <Link className="Home-Link" to="/signup">Signup</Link>
          </CardText>
        </CardBody>
      </Card>
    </section>
    )
  }


}

export default Home;
