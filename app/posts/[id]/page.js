import { Suspense } from "react"
import PostDetailsPage from "@/app/components/detailPost"

export default   function PostPage({params}){
   const loadingJsx = (<div><h1>Loading details..</h1></div>)
    const postid =params.id
    return(
        <div style={{padding:"20px"}}>
            <h1 style={{display:"flex",justifyContent:"center"}}>Post Detail Page</h1>
           
           <Suspense fallback={loadingJsx}>
            <PostDetailsPage postId={postid} />
            </Suspense> 
        </div>
    )
}