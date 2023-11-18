export default function Header() {
    return (
        <div className="header">
            <nav className="md:flex p-5 md:justify-between">
                <div className="flex justify-between items-center cursor-pointer">
                <a href="/" className="cursor-pointer">
                <span className="text-3xl font-bold">
                    <img className="h-12  inline" src="https://cdn-icons-png.flaticon.com/128/3859/3859602.png" alt="logo" />
                    Handcrafted Haven 
                </span>
                </a>

                </div>
                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static relative w-full left-0 md:w-auto 
                md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="text-2xl mx-4"><a href="/" className="cursor-pointer">Home</a></li>
                    <li className="text-2xl mx-4"><a href="#" className="cursor-pointer">Seller Profiles</a></li>
                    <li className="text-2xl mx-4"><a href="#" className="cursor-pointer">Product Listings</a></li>
                    <li className="text-green-500 text-2xl mx-4"><a href="#" className="cursor-pointer">Reviews and Ratings</a></li>
                </ul>
            </nav>
        </div>
    )
}