import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='relative bg-black px-3 text-center pt-4 h-44 md:h-32 w-full'>
            <div className='absolute bg-white bottom-0 flex w-[93%] md:w-[98%] flex-col items-center justify-center rounded-t-[32px] gap-4 md:flex-row md:h-20 md:justify-between md:px-4 md:items-center'>
                <h2 className='text-lg font-semibold underline pt-4 cursor-pointer'>Terms & Conditions</h2>
                <p className='text-base px-2'>@ All Rights Reserved 2024 <span className='text-orange-600 font-semibold mx-1'>Rudreshwar Foundation</span></p>
                <div className='text-orange-600 flex gap-4 pb-2 text-3xl'>
                    <Link to={ "https://www.facebook.com" }><FaFacebookF className='hover:cursor-pointer' /></Link>
                    <Link to={ "https://www.twitter.com" }><FaTwitter className='hover:cursor-pointer' /></Link>
                    <Link to={ "https://www.youtube.com" }><FaYoutube className='hover:cursor-pointer' /></Link>
                    <Link to={ "https://www.instagram.com" }><FaInstagram className='hover:cursor-pointer' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
