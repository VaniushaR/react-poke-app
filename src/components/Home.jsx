import {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import pokeball from '../assets/pokeball.png'
import {connect} from 'react-redux'
class Home extends Component {
  //changing the axios request here to get the data from the initial store state
  render() {
    //now instead having a state from component we have a this.props of this component filled with the store initial state since wrapped this component on the reucer function, Root
    console.log(this.props)
    const {posts} = this.props
    const postList = posts.length ? (
      posts.map((post)=> {
        return(
          <div className="post card" key={post.id}>
            <img src={pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={'/'+ post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>
        <h6>No posts yet</h6>
      </div>
    )

  return (
    
    <div className="container home">
      <h4>Home Feed</h4>
      {postList}

    </div>
    
  )
}}
//this function is the 1st paramete rof connect() redux method to named by convention as mapStateToProps, this functions are expected to return an object. This object, normally referred to as stateProps, will be merged as props to the connected component. If you define mergeProps, it will be supplied as the first parameter to mergeProps, in this case i'm not defining the second parameter.

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
//wrapped as High Order Component the connect redux method
export default connect(mapStateToProps)(Home)