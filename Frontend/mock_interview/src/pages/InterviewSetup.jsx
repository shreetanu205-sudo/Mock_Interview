import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

const InterviewSetup = () => {
    const navigate=useNavigate()

    const startInterview=()=>{
        navigate('/interview-room/101')
    }

  return (
    <div>
      <h1>This is the Interview Setup</h1>

      <Button text="Start Interview" onClick={startInterview} />
    
    </div>
  )
}

export default InterviewSetup
