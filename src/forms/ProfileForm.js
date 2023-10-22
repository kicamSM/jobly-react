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
    Button,
    FormFeedback,
    InputGroup
  } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../UserContext";
import "./ProfileForm.css"
import LoginForm from "./LoginForm";

/** Form for adding a user or updating a logged in user.
 *
 * Has state for the name, description, recipe, serve of the item; on submission,
 * sends {name, description, recipe, serve, id } to fn rec'd from parent.
 *
 */

const ProfileForm = ({signup, update}) => {

  const { user, setUser } = useContext(UserContext);
  console.log("setUser!!!:", setUser)
  let INITIAL_STATE; 
  const history = useHistory();
  const [ valid, setValid ] = useState(false)
  // const [passwordValid, setPasswordValid] = useState(true);
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
    INITIAL_STATE = { username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email };
  } else {
    INITIAL_STATE = { username: "", firstName: "", lastName: "", email: "" };
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {id, name, drescription, recipe, serve} to parent
   *    & clear form. */

  const handleSubmit = async evt => {
    evt.preventDefault();   
    setFormData(INITIAL_STATE);
    if(user) {
      console.log("user in handle submit profile form:", user)
      const username = user.username;
      const email = formData.email; 
      const firstName = formData.firstName
      const lastName = formData.lastName
      console.log("lastName:", lastName)
    
      delete formData.username;
      delete formData.email; 

        update(formData, username);
        console.log("formData:", formData)

        console.log("lastName222:", lastName)
        let profileData = {
          email: email, 
          username: username,
          isAdmin: user.isAdmin,
          firstName: firstName,
          lastName: lastName
        }
        console.log("otherInfo:", profileData)
        setUser(profileData)
        console.log("USER!!!!!:", user)
        setFormData(profileData);
        // todo: this is working but you need to relook at it as I think you made it more complicated than needed. 
      // } else {
        // alert('Password is incorrect:')
      // }
      setValid(true)
   

    }
    if(!user) {
      // console.log("no user will need to add singup")
      // console.log("!!!!!!!!!!!!!!formData:", formData)
      let result = await signup(formData);
      console.log("!!!!!!!user:", user)
      if(result.success) {
        history.push("/")
        // setFormData(INITIAL_STATE);

      }
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

    // if(name === "password") {
    //   setPasswordValid(value === user.password);
    // }
    
  };

  /** render form */

  return (
    <section className="col-md-4 ProfileForm">
        <Card>
            <CardTitle className="ItemForm-CardTitle">
            { !user && ( <h1>Create a Profile</h1> )}
            { user && (<h1>{user.username}'s Profile</h1>)}
            </CardTitle>
            <CardBody>
                <Form className="ItemForm" onSubmit={handleSubmit}>
                    {/* <div className="ItemForm-CardBody-div"> */}
                    <FormGroup>
                      {/* <InputGroup> */}
                        <Label htmlFor="username" sm={10}>Username: </Label>
                        { user && (
                        <Input
                            id="username"
                            name="username"
                            value={formData.username}
                            readOnly
                            style={{backgroundColor: "lightGray", color: "black"}}
                        />
                  
                    )}
                  
                        { !user && (
                        <Input
                            id="username"
                            name="username"
                            defaultValue={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                  
                    )}

                  
                        <Label htmlFor="firstName">First Name: </Label>
                       
                        <Input
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            valid
                        />
                        
           
                        <Label htmlFor="lastName">Last Name: </Label>
                        <Input
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            valid={valid}
                        />
                {/* NOTE ISSUE WITH INPUT FOR EMAIL ONLY NOT REACT ISSUE SEEMS TO BE EMAIL ISSUE */}
                         <Label htmlFor="email">Email: </Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            valid={valid}
                        />
                        {/* Note that you had the defaultValue instead of value but nethier is prefilling values  */}
                         {/* <FormFeedback invalid>Password is incorrect.</FormFeedback> */}
                        
                        {/* { user && ( <label style={{display: "none"}}>Confirm Password:</label> )} */}
                        {/* { user && ( <Label>Confirm Password:</Label> )} */}
                        { !user && ( <><Label>Password:</Label> 
                        <Input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            // style={{display: "none"}}
                            id="passwordInput"
                        /></>
                        )}
                    <FormFeedback valid>Profile updated successfully!</FormFeedback>
                    </FormGroup>
                    <Button >Save Changes</Button>
                </Form>
            </CardBody>
        </Card>
    </section>
  );
};


export default ProfileForm;
