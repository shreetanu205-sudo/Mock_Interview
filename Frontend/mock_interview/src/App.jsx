import React from 'react'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import InterviewRoom from './pages/InterviewRoom'
import InterviewSetup from './pages/InterviewSetup'
import Results from './pages/Results'
import LandingPage from './pages/LandingPage'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/interview-room/:interviewId" element={<InterviewRoom />} />
        <Route path="/results" element={<Results />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
