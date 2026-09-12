import Logo from "../assets/logo-text.png";


export default function Nav() {
  return (
    <div className="border-b border-gray-100">
      <nav className="flex justify-between gap-4 items-center py-4 container mx-auto">
        <img src={Logo} alt="Logo Text" className="w-28 sm:w-32 md:w-36" />

        {/* This Hamburger Button */}
        <button className="flex flex-col gap-1.5 md:hidden">
          <span className="h-0.5 w-6 bg-[#475569]"></span>
          <span className="h-0.5 w-6 bg-[#475569]"></span>
          <span className="h-0.5 w-6 bg-[#475569]"></span>
        </button>

        <ul className="hidden md:flex justify-between gap-4 text-[16px] text-[#475569]">
          <li>
            <a href="/" className="text-[#D91B7E]">
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <a href="/"> Technologies </a>
          </li>
          <li>
            <a href="/"> Projects </a>
          </li>
          <li>
            <a href="/"> About </a>
          </li>
          <li>
            <a href="/"> Contact </a>
          </li>
        </ul>
        <div>
          <button className="btn btn-ghost border-none outline-none shadow-none text-[#475569] rounded-[20px] py-2 px-4 text-sm md:py-2.5 md:px-5 md:text-base lg:py-3 lg:px-7 md:m-1 hover:text-[#D91B7E] hover:bg-pink-100">
            Sign In
          </button>
          <button className="btn btn-ghost border-none outline-none shadow-none     text-white bg-[#D91B7E] rounded-[20px] py-2 px-4 text-sm md:py-2.5     md:px-5 md:text-base lg:py-3 lg:px-7 hover:text-[#D91B7E] hover:bg-pink-100">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
