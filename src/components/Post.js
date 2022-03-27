import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deletePost} from '../actions/postActions'
class Post extends Component {

  handleClick = (id) => {
    this.props.deletePost(this.props.post.id)
   console.log( this.props.history.push('/')) // > this history obj from router has the push method on this router version

  }
  render() {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn-gray" onClick={this.handleClick}>Delete post</button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
