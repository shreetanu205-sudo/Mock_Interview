import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h2>Mock Interview AI</h2>

        <div>
            <Link to="/Home">Home</Link>
            {' | '}
            <Link to="interview-setup">Start Interview</Link>
            {' | '}
            <Link to="/dashboard">Dashboard</Link>
            {' | '}
            <Link to="/results">Results</Link>
            {' | '}
            <Link to="/landing-page">Landing Page</Link>
        </div>
    </nav>
  )
}

export default Navbar
