import Logo from '../assets/logo-text.png'
export default function Nav () {
    return (
        <nav>
            <img src={Logo} alt="Logo Text" />
            <ul>
                <li><a href="/"> Home </a></li>
                <li><a href="/"> Technologies </a></li>
                <li><a href="/"> Projects </a></li>
                <li><a href="/"> About </a></li>
                <li><a href="/"> Contact </a></li>   
            </ul>
            <div>
                <button className="btn btn-ghost border-none outline-none shadow-none rounded-[20px] py-3 px-7 hover:text-[#D91B7E] hover:bg-pink-100">Sign In</button>
                <button className="btn btn-ghost border-none outline-none shadow-none text-white bg-[#D91B7E] rounded-[20px] py-3 px-7 hover:text-[#D91B7E] hover:bg-pink-100">Sign In</button>
            </div>
        </nav>
    )
}