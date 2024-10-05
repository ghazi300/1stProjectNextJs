import Link from "next/link";
import Todo from "../components/todo"

export default async  function PostPage(){
 
        const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{next:{
            revalidate:120
        }})
        const posts = await  response.json()
      console.log(posts);
  const postJsx= posts.map((post)=>{
       return(
       
        <div style={{background:"white",width:"100%",padding:"10px",borderRadius:"10px",color:"black",marginTop:"20px"}}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}style={{width:"70%"}}>
            Voir Details 
            </Link> 
        </div>
    
       
       )
      
});

    return (
        <div>
            <h1>Posts Page</h1>
            {/* Posts */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> 
                  {postJsx}

            </div>
         
            {/* Posts ==*/}
            {/*<div> <Todo/></div>*/}
              </div>
    )
}