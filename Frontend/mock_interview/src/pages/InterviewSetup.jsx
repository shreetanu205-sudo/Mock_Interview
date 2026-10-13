import React from 'react'
import { useNavigate } from 'react-router-dom'

const InterviewSetup = () => {
    const navigate=useNavigate()

    const startInterview=()=>{
        navigate('/interview-room/101')
    }

  return (
    <div>
      <h1>This is the Interview Setup</h1>

      <button type="button" onClick={startInterview}>
        Start Interview
      </button>
    
    </div>
  )
}

export default InterviewSetup
