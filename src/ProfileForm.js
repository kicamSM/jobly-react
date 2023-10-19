import React, { useState } from "react";
// import './ProfileForm.css'
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

const ProfileForm = () => {
    
//   const history = useHistory()
//   let name = snacks !== undefined ? "Snack" : "Drink";
//   let addItem = snacks !== undefined  ? addSnack : addDrink
//   let addItems = snacks !== undefined ? addSnacks: addDrinks

  /** Redirect to snacks or drinks page after submitting form */

//   const redirect = () => {
//     let url = name.toLocaleLowerCase() + 's';
//     history.push(`/${url}`);
//   };
 
  /** Set initial state and the then set the formdata as initial state. */

  const INITIAL_STATE = { username: "", firstName: "", lastName: "", Email: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {id, name, drescription, recipe, serve} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('handleSubmit is running')

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
                <div>Profile</div>
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
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lasteName">Last Name: </label>
                        <input
                            type="lastName"
                            id="lasteName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="lastName"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>

                    <button onClick={handleChange}>Save Changes</button>
                </form>
            </CardBody>
        </Card>
    </section>
  );
};

export default ProfileForm;
