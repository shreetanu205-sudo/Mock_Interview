import React from 'react'
import Button from '../Components/Button'
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate()

    const startPractising=()=>{
        navigate('/interview-setup')
    }
  return (
    <div className="LandingPage">
        <section classname="hero">
            <div className="hero-tag">
                AI powered Interview Preparation
            </div>

            <h1>
                Land your dream job with Confidence
            </h1>

            <p className="hero-Description">
                Practise role-based interviews, receive AI-generated
                feedback, and improve your interview skills.
            </p>

            <Button 
                type="button" 
                text="Start Practicing"
                onClick={startPractising}>
            </Button>

        </section>
        <section className="features">
            <h2>Everything you need to prepare</h2>

            <div className='card-container'>
                <div className='card'>
                    <h3>Resume Analysis</h3>
                    <p>
                        Identify relevant skills and prepare
                        for questions based on your resume.
                    </p>
                </div>
                <div className="card">
                    <h3>Mock Interviews</h3>
                    <p>
                        Practise interview questions tailored
                        to your target role.
                    </p>
                </div>
                <div className="card">
                    <h3>AI feedback</h3>
                    <p>
                        Review your answers and discover
                        areas where you can improve.
                    </p>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default LandingPage
