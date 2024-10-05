import Link from "next/link"

export default function ArticlesPage(){
    return(
        <div>
            <h3>Articles Page</h3>
            <Link href="/posts" >
            <button>take me to the page</button>
            </Link>
        </div>
    )
}