import prisma from "@/utils/db";
import Link from "next/link";
import Logout from "./admin/_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./admin/_component/DeleteButton";
import deletePost from "./admin/_actions/deletePost";
import { style } from "./admin/constants/style";
import Universities from "./admin/[topUniverities]/page";
import TopUniversities from "./admin/[topUniverities]/page";

export default async function Blog() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
    },
  });

  const user = await getSession();

  return (
    <>
      <nav className="flex justify-between mb-4">
        <div>ApplyUni.com</div>
        <div>
          {user ? (
            <>
              Hello: {user.name} | <Logout />{" "}
            </>
          ) : (
            <>
              <Link className="mr-2" href="/admin/login">
                Login
              </Link>
              |
              <Link className="ml-2" href="/admin/register">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <hr /> <br />
      <TopUniversities />
      <div className="flex flex-wrap gap-4 mb-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-2 border-blue-800 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative"
          >
            <div className="mb-2">{post.subject}</div>
            <hr />
            <div className="min-h-24 mt-2">{post.detail}</div>
            <div>By: {post.user.name}</div>
            {user ? (
              <>
                <Link
                  href={{
                    pathname: "/admin/edit",
                    query: {
                      id: post.id,
                      subject: post.subject,
                      detail: post.detail,
                    },
                  }}
                  className={`${style} border-0 border-indigo-50  absolute top-2 right-5`}
                >
                  Edit |
                </Link>
                <DeleteButton id={post.id} deletePost={deletePost} />
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <Link
        href="/admin/new"
        className={`${style} border-indigo-800 mr-2 rounded-md`}
      >
        New
      </Link>
      <Link
        href="/admin/edit"
        className={`${style} border-indigo-800 mr-2 rounded-md`}
      >
        Edit
      </Link>
      <Link
        href="/admin/user"
        className={`${style} border-indigo-800 mr-2 rounded-md`}
      >
        User
      </Link>
      <Link href="/" className={`${style} border-indigo-800 rounded-md`}>
        Home
      </Link>
    </>
  );
}
