import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      {/* <nav>
        <Link href="/">Home</Link> |<Link href="/signup">Sign Up</Link> |
        <Link href="/signin">Sign In</Link>
      </nav> */}
    </header>
  );
}
