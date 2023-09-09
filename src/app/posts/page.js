import Link from "next/link"
import ToDo from "../components/ToDo"
const PostPage = async() => {


const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1',
{
// cache:"no-store"
next:{
  revalidate: 60 //sec
}
}
)
const toDo= await response.json()

// console.log(toDo.title)

const response0 = await  fetch('https://jsonplaceholder.typicode.com/posts',
{
// cache:"no-store"
next:{
  revalidate: 60 //sec
}
}
)
const posts= await response0.json()
const jsxPosts = posts.map((post)=>{
  return(
    <>
    <Link href={`/posts/${post.id}`}>
    <div>
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
      
      
      </div>
    </Link>
    </>
  )
})
// console.log(posts)
  return (
    <>
    <div>Post Page </div>
    <div>{toDo.title} from  server component</div>
       <ToDo/>
       <br/>
       <br/>
       <br/>
       <br/>
       {jsxPosts}

    </>
  )
}

export default PostPage