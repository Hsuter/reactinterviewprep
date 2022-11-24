import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const All = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </div>
  );
};

export default All;
