import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/index";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Add from "./components/AddEmployee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        />
        <Route
        path="/add"
        element={
          <PrivateRoute>
            <Add/>
          </PrivateRoute>
        }
      />
      </Routes>
    </Router>
  );
};

export default App;
