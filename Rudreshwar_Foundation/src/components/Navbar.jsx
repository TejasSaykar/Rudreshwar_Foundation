import { Link } from "react-router-dom"
import Menu from "./Menu"

const Navbar = () => {

    return (
        <>
            <div className='h-12 p-4 bg-gray-600 text-white flex justify-between items-center border-b-2 border-b-gray-500 py-8 lg:px-10 xl:px-10'>
                <div className="sm:flex gap-4">
                    <Link to={ "/" } className="text-lg md:text-3xl font-semibold text-orange-300">
                        <img src="/img/logo4.png" className="text-white" width={200} height={200} alt="" />
                    </Link>
                </div>
                <div className='hidden text-lg sm:font-medium md:flex gap-4'>
                    <Link className="cursor-pointer hover:text-orange-300 uppercase font-medium" to={ "/" }>Home</Link>
                    <Link className="cursor-pointer hover:text-orange-300 uppercase font-medium" to={ "/about" }>About Us</Link>
                    <Link className="cursor-pointer hover:text-orange-300 uppercase font-medium" to={ "/contact" }>Contact Us</Link>
                    <Link className="cursor-pointer hover:text-orange-300 uppercase font-medium" to={ "/events" }>Events</Link>
                </div>
                <div className='md:hidden '>
                    <Menu />
                </div>
                <div className="hidden md:flex items-center gap-1 ring-1 ring-gray-500 rounded-full py-2 px-3 hover:bg-orange-300 hover:ring-2 hover:ring-orange-300  transition-all text-xl cursor-pointer">
                    <Link className="font-medium" to={ "/payment" }><h2>Donate Now</h2></Link>
                    <img src="/img/heart.png" alt="Heart" width={ 40 } />
                </div>
            </div>
        </>
    )
}

export default Navbar
