import React from "react";
import App from "./App";
import Page2 from "./Page2";
import Page3 from "./Page3";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function All() {
  return (
    <Router>
      <div className="All">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <App />
              </>
            }
          />
          <Route
            path="/Page2"
            element={
              <>
                <Page2 />
              </>
            }
          />
          <Route
            path="/Page3"
            element={
              <>
                <Page3 />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default All;
