import React, { Component } from 'react'

import Main from './Main'
import Nav from './Nav'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="HeroBody">
          <Main />
        </div>
        <Nav />
      </div>
    )
  }
}

export default App
