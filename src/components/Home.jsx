import {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import pokeball from '../assets/pokeball.png'

class Home extends Component {
  
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,11)
      })
    })
  }
  
  render() {
    const {posts} = this.state
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
export default Home