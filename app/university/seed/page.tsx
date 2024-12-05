import seed from "@/utils/seed-university" 
import Link from "next/link";

export default async function Seed() {
 
    await seed();

    return (<>
       <p> Seeding University complete!</p>
       <Link href="/university">Go Back to University</Link>
    </>)
}