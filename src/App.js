import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

import { todoService } from "./services/firebaseService";

function App() {
  // useEffect(() => {
  //   console.log("test here");
  //   todoService.create({
  //     name: "Taha",
  //     age: 30,
  //   });
  // }, []);

  return (
    <>
      {console.log("test", process.env.REACT_APP_PROJETC_ID)}
      <Home />
    </>
  );
}

export default App;
