import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import './Home.css'

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
                <h1>Jobly</h1>
              </div>
          </CardTitle>
          <CardBody className="text-center">
            <div>All the jobs in one, convenient plae.</div>
            <h2>Welcome Back</h2>
          </CardBody>
        </Card>
      </section>
  );
}

export default Home;
