import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const InterviewRoom = () => {
    const {interviewId}=useParams()

    const navigate=useNavigate()

    const showResults=()=>{
        navigate('/results')
    }

  return (
    <div>
      <h1>Interview Room</h1>
      <p>Your interview will happen here</p>
      <p>Interview Id:{interviewId}</p>

      <button type="button" onClick={showResults}>
        Show Results
      </button>
      
    </div>
  )
}

export default InterviewRoom
