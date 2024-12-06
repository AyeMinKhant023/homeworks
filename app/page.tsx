import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      className="flex flex-col justify-center items-center text-white min-h-screen"
    >
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Plan your future</h1>
        <p className="text-xl mb-6">
          Get connected with everything you need to apply to college, research
          financial aid and scholarships, and get advice from counselors,
          advisors, and mentors.
        </p>
        <Link
          href="/university/login"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
