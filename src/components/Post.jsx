
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Post = () => {

    const {post_id} = useParams()
    console.log(post_id)
    const [id, setID] = useState(post_id)
    const [post, setPost] = useState()
   

    useEffect(() => {
      const fetchData = async () => {
      const results = await axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
      setPost(results.data)
      
      }
      fetchData();

     }, []) 

    return(
      <div className="container"> 

      { post ? (
      
      <div className="post card">
        <h1>{post.title}</h1>
       <p>{post.body}</p> 
      </div>
    
   ) : (
   
    <div>
      <h6> Posts loading ... </h6>
    </div>
    ) }
     
     
      </div>
    )
}

export {Post}