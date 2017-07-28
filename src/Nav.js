import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="App-nav">
        <Link to='/thoughts'>thoughts</Link>
        <a href='//twitter.com/gavdaly'>twitter</a>
        <Link to='/journal'>journal</Link>
        <a href='//github.com/gavdaly'>github</a>
      </nav>
    </div>
  )
}

export default Nav
