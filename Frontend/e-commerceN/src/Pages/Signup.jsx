import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Signup.css';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  async function handleSubmit(e) {
  e.preventDefault();

  const userData = {
    name,
    email,
    password
  };

  try {

    const response = await axios.post(   
      "http://localhost:8080/api/user/register",
      userData
    );

    console.log("Full Response:", response);
    console.log("User Data:", response.data);

    alert(response.data.name + " Registered Successfully ✅");

    setName('');
    setEmail('');
    setPassword('');

    navigate("/login");

  } catch (error) {
    console.error(error);
    alert("Registration Failed ❌");
  }
}

 return (
  <div className="signup-container">
    <form onSubmit={handleSubmit} className="signup-box">

      <h1 className="signup-title">Signup</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="signup-input"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="signup-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="signup-input"
      />

      <button type="submit" className="signup-btn">
        Signup
      </button>

      <h4 className="signup-footer">
        Already have an account?{" "}
        <Link to="/login" className="signup-link">
          Login
        </Link>
      </h4>

    </form>
  </div>
);
}


export default Signup
