import { Card, CardBody, CardTitle } from "reactstrap";
import './SearchBar.css'
import React, {useState, useRef} from 'react'

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
    console.log("getData:", getData)

  /** Send {searchInput} to backend
       & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      getData(formData.searchInput)
      setFormData(INITIAL_STATE);
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