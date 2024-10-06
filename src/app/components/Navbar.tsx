import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-red-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-8 text-lg font-semibold text-white">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signin" className="nav-link">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/api/auth/signout" className="nav-link">
            Sign Out
          </Link>
        </li>
        <li>
          <Link href="/client" className="nav-link">
            Your Profile
          </Link>
        </li>
        <li>
          <Link href="/profile" className="nav-link">
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
