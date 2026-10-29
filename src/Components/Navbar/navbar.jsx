import React from 'react'

function navbar() {
  return (
    <div className="navbar">
        <h1 className="logo">Navbar</h1>

        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default navbar