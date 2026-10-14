import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

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

      <Button text="Show Results" onClick={showResults} /> 
      
    </div>
  )
}

export default InterviewRoom
