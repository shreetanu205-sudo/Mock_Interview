import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/landing-page" className="navbar-brand">
        <span className="brand-icon">*</span>
        <span className="brand-name">PrepOrbit</span>
      </Link>
        
        <div className="navbar-links">
            <Link to="/Home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/interview-setup" className="navbar-cta">
              Start Practicing <span>&rarr;</span>
            </Link>
            <Link to="/login-page">Login Page</Link>
        </div>
    </nav>
  )
}

export default Navbar
