import './SearchBar.css'
import React, {useState, useRef} from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label, 
  Input,
  Col, 
  Button
} from "reactstrap";

/**
 * Display search bar
 *
 */

function SearchBar({getCompanies, getJobs}) {
    // console.log("search:", search)
    const [searchInput, setSearchInput] = useState("");
    const INITIAL_STATE = { searchInput: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    let getData = getCompanies !== undefined ? getCompanies : getJobs; 
    // console.log("getData:", getData)

  /** Send {searchInput} to backend
       & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      getData(formData.searchInput)
      setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        // console.log('handleChange is running')
        const { name, value }= evt.target;
    
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));
        
      };

    return (
        <div className='SearchBar'>
            <Form className="SearchBar" onSubmit={handleSubmit}>
                    <Label For="searchInput" sm={2} className="mb3"> </Label>
                    <Input 
                        type="text"
                        placeholder="Enter search term..."
                        onChange={handleChange}
                        value={formData.searchInput} 
                        id="searchInput"
                        name="searchInput"
                        required />
                <Button color="primary">Submit</Button>
            </Form>
        </div>
    );
  }
  
  export default SearchBar;