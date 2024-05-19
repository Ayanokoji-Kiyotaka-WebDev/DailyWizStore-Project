import React from 'react'
import './Navbar.css'
// 
// import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
<img src="./cart.png" className="nav-logo" alt="" style={{ width: '50px', height: '50px' }} />

      <img src="./proflio.jpg"className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
