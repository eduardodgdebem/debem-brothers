import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full text-end text-white">
      <div className="relative z-10 p-3 h-full from-[#00000095] to-[#00000000] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:opacity-90">
        <Link href="/" className="relative pr-4 z-20">
          Home
        </Link>
        <Link href="/works" className="relative pr-4 z-20">
          Works
        </Link>
        <Link href="/about" className="relative pr-4 z-20">
          About
        </Link>
        <Link href="/contact/teste" className="relative pr-4 z-20">
          Talk to us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
