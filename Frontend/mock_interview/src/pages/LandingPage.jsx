import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero_image.png'

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero-section">

        {/* Left Column: Text and Actions */}
        <div className="hero-content">
          <p className="hero-tag">
            YOUR PERSONAL AI INTERVIEW STUDIO
          </p>

          <h1 className="hero-header">
            Practise the questions.
          </h1>

          <h2 className="hero-sub-header">
            Own the room.
          </h2>

          <p className="hero-description">
            Build interview confidence with adaptive questions,
            thoughtful feedback, and coaching that gets you
            closer to your dream role.
          </p>

          <div className="hero-actions">
            <Link
              to="/interview-setup"
              className="interview-start-btn"
            >
              Start Practising <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="hero-visual">
          <img
            src={heroImage}
            alt="AI-powered interview practice"
          />
        </div>

      </section>

      {/* Features Section */}
      <section className="features-section">

        <div className="features-intro">
          <h2 className="feature-description-tag">
            More than a mock.
          </h2>

          <h2 className="feature-sub-head">
            A better way to grow.
          </h2>
        </div>

        <div className="features-list">

          <article className="feature-item">
            <span className="description-number">01</span>

            <h3 className="description-tag">
              Interviews built around you
            </h3>

            <p className="description-para">
              Choose your role, skills, and challenge level.
              Every session meets you exactly where you are.
            </p>
          </article>

          <article className="feature-item">
            <span className="description-number">02</span>

            <h3 className="description-tag">
              Feedback you can act on
            </h3>

            <p className="description-para">
              See where your answers shine and where to
              sharpen them, with practical next steps.
            </p>
          </article>

          <article className="feature-item">
            <span className="description-number">03</span>

            <h3 className="description-tag">
              Confidence that compounds
            </h3>

            <p className="description-para">
              Track every attempt, notice your patterns,
              and watch preparation turn into progress.
            </p>
          </article>

        </div>
      </section>

      {/* Closing Section */}
      <section className="closing-section">
        <p className="footer-text">
          THINK CLEARLY <span>✦</span>
          SPEAK NATURALLY <span>✦</span>
          GROW CONFIDENTLY
        </p>
      </section>

    </div>
  )
}

export default LandingPage