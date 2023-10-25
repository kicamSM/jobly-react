import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/**
 *  Redirect 
 */

const Redirect = () => {

   /** Get user from context, set history */

  const { user } = useContext(UserContext);
  const history = useHistory();
  
  /** If user return */

  if (user) {
    return null;
  }

  /** If no user redirect to home page */

 history.push("/")
   return null;
}

export default Redirect; 

