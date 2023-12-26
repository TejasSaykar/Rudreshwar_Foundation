import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About Us", url: "/about" },
    { id: 3, title: "Contact Us", url: "/contact" },
    { id: 4, title: "Events", url: "/events" }
]

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className='flex'>
                <h3 className='text-lg md:text-xl font-medium mx-1 text-orange-300'>MENU</h3>
                { open ? <IoClose className='text-3xl cursor-pointer text-orange-300' onClick={ () => setOpen(false) } /> :
                    <IoMenu className='text-3xl cursor-pointer text-orange-300' onClick={ () => setOpen(true) } /> }
            </div>

            { open &&
                <>
                    <div className='flex flex-col absolute left-0 top-16 w-full items-center justify-center gap-5 h-[calc(100vh-4rem)] z-10 border-t-2 border-t-gray-500 bg-orange-50'>
                        {
                            links.map((link) => (
                                <Link to={ link.url } className='cursor-pointer text-xl text-orange-400 hover:text-orange-600 hover:font-semibold' key={ link.id } onClick={ () => setOpen(false) }>{ link.title }</Link>
                            ))
                        }

                        <Link className="cursor-pointer text-xl font-semibold">
                            <div className="flex items-center gap-1 ring-1 ring-gray-500 rounded-full py-2 px-4">
                                <Link to={"/payment"} onClick={() => setOpen(false)}><h2 className='text-orange-400 hover:text-orange-600'>Donate Now</h2></Link>
                                <img src="/img/heart.png" className='mt-1' alt="Heart" width={ 30 } />
                            </div>
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Menu

