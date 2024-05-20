import React from 'react'
import './Navbar.css'
// 
// import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
<img src="./cart.png" className="nav-logo" alt="" style={{ width: '50px', height: '50px' }} />

<img src="./profi.jpg" className='nav-profile' alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

    </div>
  )
}

export default Navbar
