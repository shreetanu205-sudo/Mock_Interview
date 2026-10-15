import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import Button from '../Components/Button'

const LoginPage = () => {
    const[email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[message,setMessage]=useState('')

    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(!email || !Password){
            setMessage('Please fill all required fields')
            return
        }

        setMessage('Log In Successfull')

        navigate('/dashboard')
    }


  return (
    <div className="Login-page">
      <h1>
        Welcome Back
      </h1>
      <p>
        Login to continue your interview preparation
      </p>

      <form onSubmit={handleSubmit} className="Login-form">
        <label forhtml="email">Email</label>
        <input 
            id="email"
            value={email}
            type="email" 
            placeholder="Enter your email"
            onChange={(event)=>setEmail(event.target.value)}
            required
        />
        <label forhtml="Password">Password</label>
        <input 
            type="Password"
            value={Password}
            id="Password"
            placeholder="Enter your Password"
            onChange={(event)=>setPassword(event.target.value)}
            required
        />
        <button type="submit" className="Submit-Btn">
            Log In
        </button>
      </form>

        {message && <p role="status">{message}</p>}

        <p>
            New here? <Link to="/signup">Create an account</Link>
        </p>


    </div>
  )
}

export default LoginPage
