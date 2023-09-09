import React from 'react'

const PostDetails = async ({params}) => {
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`,
{
// cache:"no-store"
next:{
  revalidate: 120 //sec
}
}
)
const post= await response.json()
  return (<>
    <div>PostDetails id {params.postId}</div>
    <div>title {post.title}</div>
    <div>body {post?.body}</div>
  </>
  )
}
export default PostDetails