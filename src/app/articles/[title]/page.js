import React from 'react'
export const metadata ={
    title:"article"
}
const ShowArticelPage = (title) => {
    console.log(title.params.title ,4)
  return (
    <div>Show Articel Page</div>
  )
}
export default ShowArticelPage