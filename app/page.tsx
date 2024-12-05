import Link from "next/link";

export default function Home() {
  return (<>
    <h1>My University App</h1> 
    <hr />
    <ul className="list-disc"> 
      <li> <Link href="/university">University</Link></li> 
      {/* <li> <Link href="/blog-ui">Blog-UI</Link></li>  */}
    </ul>
  </>)
}