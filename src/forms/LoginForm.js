import React, { useState } from "react";
// import './LoginForm.css'
import {
    Card,
    CardBody,
    CardTitle
  } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useLocalStorage from "../hooks/useLocalStorage";

/** Form for creating a snack or drink item to add to snacks or drinks.
 *
 * Has state for the name, description, recipe, serve of the item; on submission,
 * sends {name, description, recipe, serve, id } to fn rec'd from parent.
 *
 */

const LoginForm = ({login}) => {
    
//   const history = useHistory()
//   let name = snacks !== undefined ? "Snack" : "Drink";
//   let addItem = snacks !== undefined  ? addSnack : addDrink
//   let addItems = snacks !== undefined ? addSnacks: addDrinks

//   /** Redirect to snacks or drinks page after submitting form */

//   const redirect = () => {
//     let url = name.toLocaleLowerCase() + 's';
//     history.push(`/${url}`);
//   };
 
//   /** Set initial state and the then set the formdata as initial state. */

  const INITIAL_STATE = { username: "", password: "" };

  // *This will be my formData when finished 
  // const [formData, setFormData] = useState(INITIAL_STATE);

  // *Form data set for testing application
  const [formData, setFormData] = useState({
    username: 'testuser',
    password: 'password',
  });

  const history = useHistory()
  const [token, setToken] = useLocalStorage();

  // const GetTokenFromLocalStorage = () => {
  
  //   const getToken = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       setToken(token);
  //     } else {
  //       setToken(null);
  //     }
  //   };
  // }

//   /** Send {id, name, drescription, recipe, serve} to parent
//    *    & clear form. */

console.log("history!!!!", history)
  /** Redirect to home page after submitting form */

  const redirect = () => {
    if(token) {
      history.push('/');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // addItem(formData);
    // addItems(formData)
    login(formData)
    setFormData(INITIAL_STATE);
    
    redirect()
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    console.log('handleChange is running')
    const { name, value }= evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
    
  };

  /** render form */

  return (
    <section className="col-md-4">
        <Card>
            <CardTitle className="ItemForm-CardTitle">
                <div>Log In</div>
            </CardTitle>
            <CardBody>
                <form className="ItemForm" onSubmit={handleSubmit}>
                    <div className="ItemForm-CardBody-div">
                        <label htmlFor="username">Username: </label>
                        <input
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button >Submit</button>
                </form>
            </CardBody>
        </Card>
    </section>
  );
};


export default LoginForm;
