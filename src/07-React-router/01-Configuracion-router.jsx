import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

const BrowserRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default BrowserRouter