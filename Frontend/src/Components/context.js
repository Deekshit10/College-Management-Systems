import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

let url = "http://192.168.49.2:30336";

const AppProvider = ({ children }) => {
  const [studVal, setstud] = useState("");
  useEffect(() => {
    axios.get(url + "/api/students").then((res) => {
      if (res.data) {
        setstud(res.data);
        // console.log(stud);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ studVal, setstud }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
