import React, { useState }  from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function InfoPage({companies, jobs}) {

  const [searchInput, setSearchInput] = useState("");
  // todo not 100% sure this search input should be inState will have to check this out
  let info = companies !== undefined ? companies : jobs; 

  /** Set initial state and the then set the formdata as initial state. */

  const INITIAL_STATE = { username: "", firstName: "", lastName: "", Email: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

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

    return(
        <section className="col-md-4">
        
        {/* <input type="text" placeholder="Enter search term..." value={searchInput} onChange={handleChange}/> */}
        <form className="InfoForm" onSubmit={handleSubmit}>
            <div className="InfoForm-CardBody-div">
                <label htmlFor="search"> </label>
                <input
                    id="search"
                    name="search"
                    value={formData.search}
                    onChange={handleChange}
                    placeholder="Enter search term..."
                    required
                />
            </div>
            <button onClick={handleChange}>Submit</button>
        </form>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {/* will input the name of the job or the company title */}
              CardTitle
            </CardTitle>
            <CardText>
              {/* this is the description of the job or the cmpany */}
            </CardText>
            CardText
            {/* <ListGroup>
              {items.map(item => (
                <Link to={`/${nameItem}/${item.id}`} key={item.id}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup> */}
          </CardBody>
        </Card>
      </section>
    )

}

export default InfoPage
