import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PrivateRoute from "./PrivateRoute";
import Messages from "../Pages/Messages";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route
        path="/messages"
        element={
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
