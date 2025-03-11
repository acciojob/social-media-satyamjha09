import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Posts</Link> {/* Changed from Home to Posts */}
      <Link to="/users">Users</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  )
}

export default Navbar