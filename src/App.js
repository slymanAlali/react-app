
import './App.css';
import './css/form.css'
import {useState} from "react"
import HomePage from './homepage/HomePage';
import { Outlet, Routes } from 'react-router-dom';
import Login from './website/Login';
import Register from './website/Register';
import Navbar from './component/Navbar';
import Home from './component/Home';
//import {Route} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
import Cart from './component/Cart';



function App() {
  return (
    <>
    <Navbar />
      <Routes >
        <Route  path = '/' Component =  {Home} />
        <Route  path = 'products' Component = {Products} />
        <Route  path = '/products/:id' Component = {Product} />
        <Route  path = '/about' Component = {About} />
        <Route  path = '/contact' Component = {Contact} />
        <Route  path = '/checkout' Component = {Checkout} />
        <Route  path = '/cart' Component = {Cart} />
      </Routes>  
    </>
  )
}
  export default App                                                              