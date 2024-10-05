export default function ArticleByTitle(props){
    console.log(props);
    return (
        
        <div>
            <h1>
                Show Title
            </h1>
            <h2>{props.params.title}</h2>
        </div>
    )
}