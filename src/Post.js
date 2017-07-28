import React, { Component } from 'react'

class Post extends Component {
  state = {
    slug: '',
    post: []
  }
  componentDidMount() {
    const slug = this.props.match.params.slug
    const location = `https://gavdaly.com/wp-json/wp/v2/posts?slug=${slug}`
    fetch(location).then(response => {
      return response.json()
    })
    .then(post => {
      this.setState({post, slug})
    })
    .catch(function(error) { console.log(error) })
  }
  createMarkup = (html) => { return {__html: html}}
  render(){
    const post = this.state.post.map(p => {
      return (
        <div key={p.slug}>
          <h1>{p.title.rendered}</h1>
          <div dangerouslySetInnerHTML={this.createMarkup(p.content.rendered)} ></div>
        </div>
      )
    })
    return (<div>{post}</div>)
  }

}

export default Post
