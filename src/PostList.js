import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './PostList.css'

class PostsList extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const location = 'https://gavdaly.com/wp-json/wp/v2/posts'
    fetch(location).then(response => {
      return response.json()
    })
    .then(posts => {
      this.setState({posts})
      console.log(posts)
    })
    .catch(function(error) { console.log(error) })
  }
  render() {
    const posts = this.state.posts.map(post => {
      return <Link to={`/thoughts/${post.slug}`} key={post.id}>{post.title.rendered}</Link>
    })
    return(
      <div>
        <div className='postList'>
          {posts}
        </div>
      </div>
    )
  }
}

export default PostsList
