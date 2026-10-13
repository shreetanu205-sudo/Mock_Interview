import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>AI Mock interview</h1>
      <p>Welcome to your AI powered interview platform</p>
      
      <Link to="/dashboard">
        Go to Dashboard
      </Link>
      {' | '}
      <Link to="interview-setup">
         Start Interview
      </Link>
      {' | '}
      <Link to="/results">
        Go to Results
      </Link>

    </div>
  )
}

export default Home
