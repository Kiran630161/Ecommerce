import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar({ onSearch }) {

  const [search, setSearch] = useState("")
  const user = JSON.parse(localStorage.getItem("user"))

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h2 style={{ color: "#ffffff", fontWeight: "bold",letterSpacing: "1px" }}>
      Shop<span style={{ color: "#facc15",letterSpacing: "1px" }}>Easy</span></h2>

      {/* SEARCH */}
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        {/* USER */}
        <div className="user">
          👤 <span>{user?.name}</span>
        </div>

        {/* LINKS */}
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login" className="logout">Logout</Link>

      </div>

    </nav>
  )
}

export default Navbar