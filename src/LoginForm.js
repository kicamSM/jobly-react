import React, { useState } from "react";
// import './LoginForm.css'
import {
    Card,
    CardBody,
    CardTitle
  } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/** Form for creating a snack or drink item to add to snacks or drinks.
 *
 * Has state for the name, description, recipe, serve of the item; on submission,
 * sends {name, description, recipe, serve, id } to fn rec'd from parent.
 *
 */

const LoginForm = () => {
    
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
  const [formData, setFormData] = useState(INITIAL_STATE);

//   /** Send {id, name, drescription, recipe, serve} to parent
//    *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('handle submit is running')
    // delete formData[''];
    // formData['id'] = formData.name.toLowerCase()
    // formData['name'] = formData.name.charAt(0).toLocaleUpperCase() + formData.name.slice(1)

    // addItem(formData);
    // addItems(formData)
    
    setFormData(INITIAL_STATE);
    // redirect()
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

                    <button onClick={handleChange}>Submit</button>
                </form>
            </CardBody>
        </Card>
    </section>
  );
};

export default LoginForm;
