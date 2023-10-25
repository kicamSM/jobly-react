import './SearchBar.css'
import React, { useState } from 'react'
import {
  Form,
  Label, 
  Input,
  Button
} from "reactstrap";

/**
 * Display search bar
 */

function SearchBar({getCompanies, getJobs}) {

    /** Set initial state, set for data as initial state in state, and determine if dealing with companies or jobs*/
  
    const INITIAL_STATE = { searchInput: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    let getData = getCompanies !== undefined ? getCompanies : getJobs; 

    /** Handle submit, get API result for companies or jobs, set formData to initial state*/
  
    const handleSubmit = evt => {
      evt.preventDefault();
      getData(formData.searchInput)
      setFormData(INITIAL_STATE);
    };

    /** Update local state with current state of input element */

    const handleChange = evt => {
        const { name, value }= evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));
        
      };

    /** Render search bar */

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