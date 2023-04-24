import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="absolute top-3 z-50 w-full text-end text-white">
      <Link href="/" className="pr-4">Home</Link>
      <Link href="/works" className="pr-4">Works</Link>
      <Link href="/about" className="pr-4">About</Link>
      <Link href="/contact/teste" className="pr-4">Talk to us</Link>
    </nav>
  );
};

export default NavBar;
