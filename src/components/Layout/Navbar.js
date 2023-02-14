function Navbar(){
    return(
        <div className="flex bg-slate-400 mx-12 mt-4 gap-40 rounded-full justify-center items-strech">
            <div className="flex-none logo pl-12  py-3">logo</div>
            <div className="flex-1 nav bg-slate-300 py-4 rounded-full ">
                <ul className="flex gap-8 justify-center cursor-pointer">
                <li className="bg-slate-800 py-1 px-2 rounded-md ">Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                </ul>
            </div>
            <div className="flex-none pr-12  py-3">button</div>
        </div>
    )
}

export default Navbar;