import React from "react";
import "./404.css"
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

function NotFound() {

    return (
        <Card className="Not-Found"> 
            <CardTitle>
                <h1>404</h1>
            </CardTitle>
            <CardBody>
                <CardText>Sorry the page you were looking for doesn't exist.</CardText>
            </CardBody>
        </Card>
    )
}

export default NotFound;