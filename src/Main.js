import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Posts from './Posts'
import Journal from './Journal'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/thoughts' component={Posts}/>
      <Route path='/journal' component={Journal}/>
    </Switch>
  </main>
)

export default Main
