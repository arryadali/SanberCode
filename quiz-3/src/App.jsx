import React from "react";
import ManageData from "./component/managedata";
import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/manage-data" element={<ManageData/>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
