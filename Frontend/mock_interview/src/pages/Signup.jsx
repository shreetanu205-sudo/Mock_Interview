import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'


const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()

        if(!email.trim()||
            !password ||
            !name.trim() ||
            !confirmPassword
        ){
            setMessage('Please fill al required fields')
            return
        }

        if(password!==confirmPassword){
            setMessage('Passwords do not match')
            return
        }

        setMessage('Signup Successfull')

        navigate('/login-page')
    }
  return (

    <div className="signup-page">
      <h1>Create your account</h1>
      <p>Start preparing for your next interview</p>

      <form onSubmit={handleSubmit} className="Login-form">
        <label htmlfor="name">Full Name</label>
        <input 
            type='name'
            onChange={(event)=>setName(event.target.value)}
            value={name}
            id="name"
            placeholder="Enter your full name"
            required
        />

        <label htmlfor="email">Email</label>
        <input 
            type="email"
            id="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            placeholder="Enter your email"
            required
        />
        <label htmlfor="password">Password</label>
        <input 
            type='password'
            id='password'
            value={password}
            placeholder="Enter password"
            onChange={(event)=>setPassword(event.target.value)}
            required
        />

        <label htmlfor="confirmPassword">Confirm Password</label>
        <input 
            type='Password'
            id='confirmPassword'
            value={confirmPassword}
            placeholder="Enter password again"
            onChange={(event)=>setConfirmPassword(event.target.value)}
            required
        />
        <button type="submit" className="Submit-Btn">
            Create Account
        </button>
      </form>

      {message && <p role="status" className='status-signup'>{message}</p>}

       <p>
            Already have an account?{' '}
            <Link to="/login-page">Log in</Link>
       </p>
    </div>
  )
}

export default Signup
