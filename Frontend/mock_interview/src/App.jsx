import React from 'react'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import InterviewRoom from './pages/InterviewRoom'
import InterviewSetup from './pages/InterviewSetup'
import Results from './pages/Results'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/interview-room" element={<InterviewRoom />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
