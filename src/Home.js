import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import './Home.css'

/**
 * Display home page and count of snacks and drinks
 *
 */

function Home() {
  return (
      <section className="col-md-8 Home">
        <Card>
          <CardTitle>
              <div className="font-weight-bold Home-div">
                Welcome to Jobly! 
              </div>
          </CardTitle>
          <CardBody className="text-center">
          
          </CardBody>
        </Card>
      </section>
  );
}

export default Home;
