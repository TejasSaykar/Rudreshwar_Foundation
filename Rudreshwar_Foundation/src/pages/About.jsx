import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="top w-full bg-black py-4 lg:flex lg:justify-between lg:px-3">
                <div className='text-white flex items-center justify-center text-lg gap-2'>
                    <h3>Helping today </h3>
                    <img src="/img/heart.png" className='mt-2' width={ 20 } alt="" />
                    <h3>Helping tommorow</h3>
                </div>
                <div className='text-white flex text-sm gap-3 justify-center my-3'>
                    {/* <div className="left hover:text-orange-300 cursor-pointer">Email:vysanmukti@gmail.com</div> */ }
                    <div className="right cursor-pointer text-center">Phone: <Link className='mx-1 hover:text-orange-300 hover:underline' to="tel:+9226111567">9226111567,</Link> <Link className='mx-1 hover:text-orange-300 hover:underline' to={"9209874459"}>9209874459,</Link> <Link className='mx-1 hover:text-orange-300 hover:underline' to="9209935025">9209935025,</Link> <Link className='hover:text-orange-300 hover:underline' to="9209926969" >9209926969</Link></div>
                </div>
                ""
                <div className='text-white flex justify-center gap-5 items-center'>
                    <h2>Social Network</h2>
                    <div className='text-orange-400 flex gap-3 text-2xl'>
                        <Link to={ "https://www.facebook.com" }><FaFacebookF className='hover:cursor-pointer' /></Link>
                        <Link to={ "https://www.twitter.com" }><FaTwitter className='hover:cursor-pointer' /></Link>
                        <Link to={ "https://www.youtube.com" }><FaYoutube className='hover:cursor-pointer' /></Link>
                        <Link to={ "https://www.instagram.com" }><FaInstagram className='hover:cursor-pointer' /></Link>
                    </div>
                </div>
            </div>
            <div className='bg-orange-50 text-center py-3 font-semibold px-3 lg:h-[76vh] sm:flex sm:flex-col items-center justify-center'>
                <h2 className='text-3xl py-4 text-orange-600'>Vyasan Mukti Kendra Nashik</h2>
                <p className='font-black leading-7'>We are one of the top de-addction treatment centers in Nashik. Our Rehab center has 5000+ Patients/Addicts since 2010. We have a holistice approach for addiction treatment. If you have a problem with your addiction and want to quit so you can regain a normal and healthy lifr and not waste your time, contact Vyasan Mukti Kendra Nashik and get back to your normal life. Our Rehab Center is awarded as on of the best De-addiction center in India.</p>
                <div className='py-4 flex flex-col gap-4'>
                    <h3>1. हम 2011 से शराब और ड्रग्स के शिकार लोगों का ईलाज कर रहे हैं, हमारा कार्यक्रम नशे और पुनर्वास दोनों के उद्देश्य से है | </h3>
                    <h3>2. हम अपने कार्यक्रम में शारीरिक, मानसिक, सामाजिक और आध्यात्मिक सभी चार स्तरों पर काम करते हैं | </h3>
                    <h3>3.  मादक पदार्थों की लत के क्षेत्र में हमारे प्रयास बहुत संतोषजनक रहे हैं, लगभग 85 प्रतिशत मरीज जो हमारे इलाज करते हैं वे नशे से दूर हैं | </h3>
                </div>
            </div>
        </div>
    )
}

export default About
