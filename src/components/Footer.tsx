const Footer = () => {
  return (
    <footer className="bg-gray-dark text-gray-light font-thin grid grid-cols-[repeat(auto-fit,minmax(12rem,_1fr))] gap-4 p-10 justify-items-center">
      <div>
        <p>call us:</p>
        <ul className="list-disc">
          <li>
            <a href="tel:+12393082047" className="hover:text-white">239-308-2047</a>
          </li>
          <li>
            <a href="tel:+12392366542" className="hover:text-white">239-236-6542</a>
          </li>
        </ul>
      </div>
      <div>
        <p>email-us</p>
        <ul className="list-disc">
          <li>
            <a href="mailto:debemborthers@gmail.com" className="hover:text-white">debemborthers@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
