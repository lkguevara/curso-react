import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NoFound from './Pages/NoFound'
import Navbar from "./Components/Navbar";
import UsersPage from "./Pages/UsersPage";
import Dashboard from "./Pages/dashboard";

const BrowserRouter = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" exact component={< Home/>} />
              <Route path="/about" component={< About />} />
              <Route path="/contact" component={< Contact/>} />
              <Route path="/user/:id" component={<Navigate to= "UsersPage" />} />
              <Route path="/usuarios" component={< UsersPage />} />
              <Route path="/dashboard" component={< Dashboard />} />
              <Route path="*" component={< NoFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default BrowserRouter