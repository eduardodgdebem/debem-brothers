import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full text-end text-gray-light">
      <div className="relative z-10 p-3 h-full from-[#00000095] to-[#00000000] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:opacity-90">
        <Link href="/" className="relative pr-4 z-20 hover:text-white">
          Home
        </Link>
        <Link href="/works" className="relative pr-4 z-20 hover:text-white">
          Works
        </Link>
        <Link href="/about" className="relative pr-4 z-20 hover:text-white">
          About
        </Link>
        <Link href="/contact/teste" className="relative pr-4 z-20 hover:text-white">
          Talk to us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
