import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {

    e.preventDefault()

    const loginData = {
      email: email,
      password: password
    }

    try {

      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        loginData
      )

      alert("Login Successful ✅")

      console.log(response.data)

      // Optional: store user/token
      localStorage.setItem("user", JSON.stringify(response.data));

      // Redirect after login
      navigate('/home')

    } 
    catch (error) {

      console.error(error)

      alert("Login Failed ❌")

    }
  }

  return (
  <div className="login-container">
    <form onSubmit={handleSubmit} className="login-box">

      <h1 className="login-title">Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />

      <button type="submit" className="login-btn">
        Login
      </button>

      <h4 className="login-footer">
        Don't have an account?{" "}
        <Link to="/signup" className="login-link">
          Signup
        </Link>
      </h4>

    </form>
  </div>
);
}

export default Login
