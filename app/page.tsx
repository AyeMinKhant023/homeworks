import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="m-0 p-0 min-h-screen bg-cover bg-center relative flex justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute flex flex-col items-center justify-center text-white h-full">
          <h1 className="text-4xl font-bold">ApplyUni.com</h1>
          <p className="mt-4 text-lg text-center">
            Apply to universities and secure your future!
          </p>
          <Link
            href="/universities/login"
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
