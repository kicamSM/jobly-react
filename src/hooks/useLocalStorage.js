import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue = []) {
//     if (localStorage.getItem(key)) {

//       console.log("localStorage.getItem(key):", localStorage.getItem(key))
//       console.log("localStorage.getItem(key):", typeof localStorage.getItem(key))
// //  the proble mis this is a string 
// // * doesnt appear to be the issue as both are strings 
// // The reason why the bottom piece of code works but not the top one is because the top piece of code is trying to parse a string as JSON, but the value stored in local storage is not a JSON string. This is because the top piece of code is not serializing the initial value to a JSON string before storing it in local storage.


//     initialValue = JSON.parse(localStorage.getItem(key));
//     }
//     const [value, setValue] = useState(initialValue);
  
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [value, key]);
  
//     return [value, setValue];
//   }
  


function useLocalStorage(key, firstValue = null) {
       console.log("localStorage.getItem(key):", localStorage.getItem(key))
       console.log("localStorage.getItem(key):", typeof localStorage.getItem(key))
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;