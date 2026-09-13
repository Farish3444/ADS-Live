import React, { useState,lazy,Suspense } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Footer from "./common/footer/Footer"
import Pantspage from "./components/comfortpants/Pantspage"
import toast, { Toaster } from 'react-hot-toast';
import Login from "./components/adsadmin/login"

function App() {
 
  const { productItems } = Data 
 
  return (
    <>
    <Toaster />
     <Router>
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="flex-1">
      <Switch>
        <Route path="/" exact>
          <Pages productItems={productItems} />
        </Route>

        <Route path="/comfortpants">
          <Pantspage />
        </Route>

        <Route path="/admin">
          <Login />
        </Route>
      </Switch>
    </main>

    <Footer />
  </div>
</Router>
    </>
  )
}

export default App
