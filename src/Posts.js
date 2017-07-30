import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostList from './PostList'
import Post from './Post'

const Posts = () => {
  return(
    <Switch>
      <Route exact path='/thoughts' component={PostList} />
      <Route path='/thoughts/:slug' component={Post} />
    </Switch>
  )
}

export default Posts
