import React from 'react'
import Styles from 'assets/styles/NavbarStyles.module.css'
import Logo from 'assets/images/logo.jpg'

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
        <div className={Styles.logo}><img src={Logo} loading='lazy'/></div>
        <a href="#apply" className="btn primary-btn btn-large geologica">Become a Missionary</a>
    </nav>    
  )
}

export default Navbar