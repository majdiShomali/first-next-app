import PostDetails from '@/app/components/postDetails'
import { Suspense } from 'react'
const PostDetailsPage = async ({params}) => {
const loadingJsx=(<div>loading+++++</div>)
  return (<>
    <div>PostDetails </div>
   
   <Suspense fallback={loadingJsx}>  
   <PostDetails params={params}/>
   </Suspense>
  </>
  )
}
export default PostDetailsPage