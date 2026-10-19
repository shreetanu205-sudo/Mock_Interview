import React from 'react'
import Button from '../Components/Button'
import {useNavigate,Link} from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate()

    const startPractising=()=>{
        navigate('/interview-setup')
    }
  return (
    <div className="LandingPage">
        <div classname="hero">
            <div className="hero-tag">
                YOUR PERSONAL AI INTERVIEW STUDIO
            </div>

            <h1 className="hero-header">
                Practise the questions.
            </h1>
            <h1 className="hero-sub-header">Own the room.</h1>

            <p className="hero-Description">
                Build interview confidence with adaptive questions,thoughtful feedback, and coaching that gets you close to your dream role.
            </p>

            <Link to="/interview-setup" className="interview-start-btn">
                Start Practicing <span>&rarr;</span>
            </Link>

        </div>
        <div className="footer">
            <footer>
                <div className="landing-scroll">
                    <div className="footer-intro">
                        <h1 className="feature">
                        More than a mock.
                        </h1>
                        <h1 className="feature-sub-head">
                            A better way to grow.
                        </h1>
                    </div>
                </div>
                <div className="bottom">
                    <p classname="footer-text">
                    THINK CLEARLY  *  SPEAK NATURALLY  *  GROW CONFIDENTLY 
                    </p>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default LandingPage
