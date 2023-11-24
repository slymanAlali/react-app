import React from 'react'
import Products from './Products'
import icon from "../images/banner-3.png"

export const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white">
  <img src= {icon}className="card-img" alt="" 
  height="500px" width= "50%" />
  <div className="card-img-overlay d-flex flex-column
  justify-content-center">
    <div className='container'>
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p className="card-text lead fs-2">
        CHECK OUT ALL THE TRENDS</p>
    
  </div>
</div>
</div>
<Products />
    </div>
  )
}
export default Home