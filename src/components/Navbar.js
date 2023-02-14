function Navbar(){
    return(
        <div className="flex bg-lime-900 mx-12 mt-4 gap-40 rounded-full justify-center items-center box-border">
            <div className="flex-none logo px-4 ml-3  py-3 bg-white rounded-full">logo</div>
            <div className="flex-1 nav bg-gray-100  py-4 rounded-full items-center ">
                <ul className="flex gap-8 justify-center cursor-pointer">
                <li className="home-components">  Home</li>
                <li className="home-components">Programs</li>
                <li className="home-components">About</li>
                <li className="home-components">Blog</li>
                <li className="home-components">Contact us</li>
                <li className="home-components">Causes</li>
                </ul>
            </div>
            <div className="px-7 rounded-full py-3 bg-orange-500 hover:bg-orange-400 mr-3 text-white text-lg tracking-wider transition duration-400">
                <button>Donate</button>
                </div>
        </div>
    )
}

export default Navbar;