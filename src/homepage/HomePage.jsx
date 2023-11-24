import React from 'react'
import logo from '../images/logo (1).png'
import './homepage.css'
function HomePage() {
  return (
    <div>
    <div className='header'>
       <img className='logo'src={logo} alt='' />
       </div>
       <div className="navmenu">
     <ul>
    <li>Home</li>
    <li>Shop</li>
    <li>Products</li>
    <li>Page</li>
    <li>Docs</li>
</ul>
</div>
    </div>
  )
}

export default HomePage