import { Link } from 'react-router-dom';
import {
    
    Person
    
  } from "@mui/icons-material";
function Navbar(){
    return(
        <div className="flex bg-lime-900 mx-12 mt-4 gap-40 rounded-full justify-center items-center box-border">
            <div className="flex-none logo px-4 ml-3  py-3 bg-white rounded-full">logo</div>
            <div className="flex-1 nav bg-gray-100  py-4 rounded-full items-center ">
                <ul className="flex gap-8 justify-center cursor-pointer">
                <li className="home-components"> 
                <Link to="/">Home</Link></li>
                <li className="home-components">
                <Link to="/programs">Services</Link></li>
                <li className="home-components">
                <Link to="/about">About</Link></li>
                <li className="home-components">
                <Link to="/blog">Blog</Link></li>
                <li className="home-components">
                <Link to="/contactus">Contact Us</Link></li>
                <li className="home-components">
                <Link to="/causes">Causes</Link></li>
                </ul>
            </div>
            <div className='flex items-center justify-center gap-6'>
            <Link to="/login"><Person fontSize='large' className="hover:text-lime-400  text-white cursor-pointer" /></Link>
            
                
            <div className="px-7 rounded-full py-3 bg-orange-500 hover:bg-orange-400 mr-3 text-white text-lg tracking-wider transition duration-400">
                <button><Link to="/donate">Donate</Link></button>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar;