import React from 'react'
import Link from 'next/link'
const ArticlesPage = () => {
  return (
    <>
    <div>Articles Page</div>
    <Link href="/posts">
    <button>

      Post
    </button>
    </Link>
    
    </>
  )
}

export default ArticlesPage