const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#d1d1d1] font-thin flex p-10 justify-evenly">
      <div>
        <p>call us:</p>
        <ul className="list-disc">
          <li>
            <a href="tel:+12392445833" className="hover:text-white">239-239-2399</a>
          </li>
          <li>
            <a href="tel:+12392445833" className="hover:text-white">239-239-2399</a>
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
