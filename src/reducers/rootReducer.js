const initState = {
  posts: [
    {id: '1', title: "Khale Adventures chapter 1", body: "Khalesh meet her worst enemy ever, the baset hound neighbor"},
    {id: '2', title: "Khale Adventures chapter 2", body: "Khalesh find on the same street her worst enemy ever, the baset hound neighbor who was with his full gang"},
    {id: '3', title: "Khale Adventures chapter 3", body: "Khalesh bark and try to attack to her worst enemy ever, the baset hound neighbor while all his gang was trying to attack her as well."}
  ]
}



const rootReducer = (state = initState, action) => {
  console.log(action)
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id 
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer