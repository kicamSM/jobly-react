import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Redirect = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  
  if (user) {
    return null;
  }

 history.push("/")
   return null;
}

export default Redirect; 

