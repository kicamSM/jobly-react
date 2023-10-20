import { Card, CardBody, CardTitle } from "reactstrap";
import './Home.css'
import React, {useState, useRef} from 'react'

/**
 * Display search bar
 *
 */

function SearchBar({getCompanies}) {
    // console.log("search:", search)
    const [searchInput, setSearchInput] = useState("");
    const INITIAL_STATE = { searchInput: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {searchInput} to backend
       & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      console.log("handle submit is running")
      console.log('formData:', formData.searchInput)
      console.log('searchInput:', searchInput)
      getCompanies(formData.searchInput)
      setFormData(INITIAL_STATE);
      // redirect()
    };

    const handleChange = evt => {
        console.log('handleChange is running')
        const { name, value }= evt.target;
    
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));
        
      };

    return (
        <div>
            <form className="SearchBar" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="searchInput"> </label>
                    <input 
                        type="text"
                        placeholder="Enter search term..."
                        onChange={handleChange}
                        value={formData.searchInput} 
                        id="searchInput"
                        name="searchInput"
                        required />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
  }
  
  export default SearchBar;