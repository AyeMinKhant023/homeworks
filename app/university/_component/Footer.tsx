// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-semibold">About</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about/access">Access and equity</Link>
            </li>
            <li>
              <Link href="/about/guiding-principles">Guiding principles</Link>
            </li>
            <li>
              <Link href="/about/impact">Impact</Link>
            </li>
            <li>
              <Link href="/about/join">Join our board</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold">Contact</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/contact/become-a-member">Become a member</Link>
            </li>
            <li>
              <Link href="/contact/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold">Connect</h5>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="hover:text-blue-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-pink-600"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 mt-10">
        <Link href="">Terms of use</Link> | <Link href="">Privacy policy</Link>
      </div>
      <p className="text-gray-500 mt-4">© 2024 ApplyUni.com </p>
      <p className="text-gray-500 mt-2 text-xs">by Aye Min Khant (Patric)</p>
    </footer>
  );
};

export default Footer;
