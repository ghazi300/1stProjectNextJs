export default async  function PostDetailsPage({postId}){
    await new Promise((resolve)=>{
        setTimeout(()=>{
             resolve();
        },2000);
     });
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{next:{
        revalidate:120
    },});
    const post = await  response.json()
    return(
        <div>
            <div style={{background:"white",width:"100%",padding:"10px",borderRadius:"10px",color:"black",marginTop:"20px"}}>
            <h2>{post.title}</h2>
            <hr/>
            <p>{post.body}</p>
            </div>
            
        </div>
    )
}