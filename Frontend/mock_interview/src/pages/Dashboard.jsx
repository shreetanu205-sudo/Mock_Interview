import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'

const Dashboard = () => {
  const navigate=useNavigate()

  const startInterview=()=>{
    navigate('/interview-setup')
  }
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard</p>

      <Button text="Start Practicing" onClick={startInterview} />

      <div className='card-container'>
        <Card 
          title="Mock Interviews"
          description="Practice Interviews tailored to your target roles"
        />

        <Card 
          title="Resume Analysis"
          description="Review your resume and identify areas to improve"
        />

        <Card 
          title="Performance"
          description="Track your Interview scores and progress"
        />
      </div>

    </div>
  )
}

export default Dashboard
