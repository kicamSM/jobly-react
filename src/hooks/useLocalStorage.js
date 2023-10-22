import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue = []) {
//     if (localStorage.getItem(key)) {
//       initialValue = JSON.parse(localStorage.getItem(key));
//     }
//     const [value, setValue] = useState(initialValue);
  
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [value, key]);
  
//     return [value, setValue];
//   }
  


function useLocalStorage(key, firstValue = null) {
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