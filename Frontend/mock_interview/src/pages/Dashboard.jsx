import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate()

  const startInterview=()=>{
    navigate('/interview-setup')
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard</p>

      <Button text="Start Practicing" onClick={startInterview} />
    </div>
  )
}

export default Dashboard
