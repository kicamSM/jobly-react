import React, { useContext, useState } from "react";
// import './ProfileForm.css'
import {
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label, 
    Input,
    Col
  } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../UserContext";
// import "ProfileForm.css"

/** Form for adding a user or updating a logged in user.
 *
 * Has state for the name, description, recipe, serve of the item; on submission,
 * sends {name, description, recipe, serve, id } to fn rec'd from parent.
 *
 */

const ProfileForm = ({signup, update}) => {

  const { user } = useContext(UserContext);
  let INITIAL_STATE; 
    
//   const history = useHistory()
//   let name = snacks !== undefined ? "Snack" : "Drink";
//   let addItem = snacks !== undefined  ? addSnack : addDrink
//   let addItems = snacks !== undefined ? addSnacks: addDrinks

  /** Redirect to snacks or drinks page after submitting form */

//   const redirect = () => {
//     let url = name.toLocaleLowerCase() + 's';
//     history.push(`/${url}`);
//   };

// ! you may have to put the update function in app because of the user? but not sure so going to try this first. 
// async function update(data) {
//   try {
//     let token = await JoblyApi.update(data);
//     // setToken(token);
//     return { success: true };
//   } catch (errors) {
//     console.error("login failed", errors);
//     return { success: false, errors };
//   }
// }



 
  /** Set initial state and the then set the formdata as initial state. */
  if(user) {
    console.log("***user***:", user)
    console.log("***user.email***:", user.email)
    INITIAL_STATE = { username: user.username, firstName: user.firstName, lastName: user.lastName, Email: user.email };
  } else {
    INITIAL_STATE = { username: "", firstName: "", lastName: "", Email: "" };
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {id, name, drescription, recipe, serve} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();   
    setFormData(INITIAL_STATE);
    if(user) {
      console.log("user in handle submit profile form:", user)
      const username = user.username;
      delete formData.username;
      delete formData.Email; 
      delete formData.password
      console.log("user in profile form:", user)
      console.log("formdata in profile form:", formData)
      const passwordInput = document.querySelector('#my-password-input');
      passwordInput.style.display = 'block';

      update(formData, username); 

    }

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

//   return (
//     <section className="col-md-4">
//         <Card>
//             <CardTitle className="ItemForm-CardTitle">
//             { !user && ( <div>Create a Profile</div> )}
//             { user && (<div>{user.username}'s Profile</div>)}
//             </CardTitle>
//             <CardBody>
//                 <form className="ItemForm" onSubmit={handleSubmit}>
                 
//                     <div className="ItemForm-CardBody-div">
//                         <label htmlFor="username">Username: </label>
//                         { user && (
//                         <input
//                             id="username"
//                             name="username"
//                             value={formData.username}
//                             readOnly
//                             style={{backgroundColor: "gray"}}
//                         />
                  
//                     )}
//                         { !user && (
//                         <input
//                             id="username"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             placeholder="Username"
//                             required
//                         />
                  
//                     )}
//                       </div>

//                     <div>
//                         <label htmlFor="firstName">First Name: </label>
//                         <input
//                             type="firstName"
//                             id="firstName"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             placeholder="First Name"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="lastName">Last Name: </label>
//                         <input
//                             type="lastName"
//                             id="lasteName"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             placeholder="Last Name"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="email">Email: </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.Email}
//                             onChange={handleChange}
//                             placeholder="Email"
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         { !user && ( <label>Password:</label> )}
//                         {/* { user && ( <label style={{display: "none"}}>Confirm Password:</label> )} */}
//                         { user && ( <label>Confirm Password:</label> )}
//                         <input
//                             type="password"
//                             name="password"
//                             className="form-control"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Password"
//                             // style={{display: "none"}}
//                             id="passwordInput"
//                         />
//                       </div>

//                     {/* <button onClick={handleChange}>Save Changes</button> */}
                    
//                     <button >Save Changes</button>
//                 </form>
//             </CardBody>
//         </Card>
//     </section>
//   );
// };

return (
  <section className="col-md-4">
      <Card>
          <CardTitle className="ItemForm-CardTitle">
          { !user && ( <div>Create a Profile</div> )}
          { user && (<div>{user.username}'s Profile</div>)}
          </CardTitle>
          <CardBody>
              <Form className="ItemForm" onSubmit={handleSubmit}>

                  <FormGroup row>
                  {/* <div className="ItemForm-CardBody-div"> */}
                      <Label htmlFor="username"  sm={2}>Username: </Label>
                      { user && (
                        <Col sm={10}>
                      <Input
                          id="username"
                          name="username"
                          value={formData.username}
                          readOnly
                          style={{backgroundColor: "gray"}}
                      />
                      </Col>
                
                  )}
                  </FormGroup>
                      { !user && (
                         <Col sm={10}>
                      <Input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Username"
                          required
                      />
                    </Col>
                  )}
                    {/* </div> */}

                  {/* <div> */}
                  <FormGroup row>
                      <Label sm={2} htmlFor="firstName">First Name: </Label>
                      <Input
                          type="firstName"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                      />
                  {/* </div> */}
                  </FormGroup>

                  <div>
                      <label htmlFor="lastName">Last Name: </label>
                      <input
                          type="lastName"
                          id="lasteName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                      />
                  </div>

                  <div>
                      <label htmlFor="email">Email: </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.Email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                      />
                  </div>

                  <div className="form-group">
                      { !user && ( <label>Password:</label> )}
                      {/* { user && ( <label style={{display: "none"}}>Confirm Password:</label> )} */}
                      { user && ( <label>Confirm Password:</label> )}
                      <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
                          // style={{display: "none"}}
                          id="passwordInput"
                      />
                    </div>

                  {/* <button onClick={handleChange}>Save Changes</button> */}
                  
                  <button >Save Changes</button>
              </Form>
          </CardBody>
      </Card>
  </section>
);
};

export default ProfileForm;
