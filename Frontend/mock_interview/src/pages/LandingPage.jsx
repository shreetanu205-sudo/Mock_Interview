import React from 'react'
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate()

    const startPractising=()=>{
        navigate('/interview-setup')
    }
  return (
    <div className="LandingPage">
        <section classname="hero">
            <h1 className="hero-tag">
                AI powered Interview Preparation
            </h1>

            <h1>
                Land your dream job with Confidence
            </h1>

            <p className="hero-Description">
                Practise role-based interviews, receive AI-generated
                feedback, and improve your interview skills.
            </p>

            <Button type="button" onClick={startPractising}>
                Start Practising
            </Button>
        </section>
        
      
    </div>
  )
}

export default LandingPage
