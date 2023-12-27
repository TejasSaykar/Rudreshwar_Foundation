import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const data = [
        { id: 1, img: "/img/banner1.jpg" },
        { id: 2, img: "/img/banner2.jpg" },
        { id: 3, img: "/img/banner3.jpg" }
    ]

    const [amount, setAmount] = useState("");
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((prev) => prev === data.length - 1 ? 0 : prev + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        }

    }, []);


    return (
        <div className=''>
            <div className="top relative h-[70vh] md:h-[90vh] w-full">
                <img src="/img/bg2.jpg" className='opacity-80 h-[60vh] md:h-[90vh] w-full' alt="drug" />
                <p className='absolute top-16 md:top-24 px-10 text-base font-semibold sm:text-4xl bg-white mx-6 py-3 rounded-md opacity-75'>Helping around the world</p>
                <h2 className='absolute top-20 md:top-28 px-10 mt-14 text-xl font-bold text-orange-500 bg-gray-900 mx-6 py-4 rounded-md sm:text-5xl opacity-85'>MAKE SOMEONE'S LIFE HAPPY</h2>
                <div className='donate absolute top-[18rem] md:top-[28rem] bg-orange-300 flex flex-col w-[90%] mx-5 md:mx-16 rounded-xl px-2 py-3 items-center justify-center'>
                    <div className='text-center flex flex-col gap-4 lg:flex-row items-center justify-center'>
                        <div>
                            <h2 className='text-xl font-semibold md:text-4xl md:pb-3'>MAKE A DONATION</h2>
                            <p className='text-base py-2 font-normal'>Lorem ipsum adipisicing elit. Porro expedita debitis vero?</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='relative w-[95%] m-auto'>
                                <input type="text" value={ amount } onChange={ (e) => setAmount(e.target.value) } autoFocus className='py-2 my-2 w-full rounded-full outline-none outline-gray-600 pl-10 text-black bg-orange-300 font-semibold placeholder:text-orange-100' placeholder={ `${amount === "" && "Enter amount"}` } />
                                <span className='bg-black left-[-5px] top-1 w-[40px] py-3 absolute rounded-l-full text-white text-center font-bold'>₹</span>
                            </div>
                            <div className='w-full lg:order-1'>
                                <div className='flex flex-wrap gap-5 my-2 items-center justify-center'>
                                    <span className={ `ring-2 ring-gray-50 py-2 px-5 rounded-full cursor-pointer font-bold ${amount === "10" ? "bg-white" : "bg-orange-300"}` } onClick={ () => { setAmount("10") } }>₹10</span>
                                    <span className={ `ring-2 ring-gray-50 py-2 px-5 rounded-full cursor-pointer font-bold ${amount === "25" ? "bg-white" : "bg-orange-300"}` } onClick={ () => { setAmount("25") } }>₹25</span>
                                    <span className={ `ring-2 ring-gray-50 py-2 px-5 rounded-full cursor-pointer font-bold ${amount === "50" ? "bg-white" : "bg-orange-300"}` } onClick={ () => { setAmount("50") } }>₹50</span>
                                    <span className={ `ring-2 ring-gray-50 py-2 px-5 rounded-full cursor-pointer font-bold ${amount === "100" ? "bg-white" : "bg-orange-300"}` } onClick={ () => { setAmount("100") } }>₹100</span>
                                    <span className={ `ring-2 ring-gray-50 py-2 px-5 rounded-full cursor-pointer font-bold ${amount === "250" ? "bg-white" : "bg-orange-300"}` } onClick={ () => { setAmount("250") } }>₹250</span>
                                    <span className={ `ring-2 w-1/3 md:w-none px-1 ring-gray-50 rounded-full py-1 cursor-pointer font-bold ${amount === "" ? "bg-white" : "bg-orange-300"}` } onClick={ () => setAmount("") }>Custom Amount</span>
                                </div>
                                <div className='btn'>
                                    <Link to={ "/payment" }>
                                        <button className='bg-black text-white py-2 px-2 md:px-4 rounded-full w-1/2 md:w-1/3 mt-2 font-semibold text-xl'>Donate Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyus py-3 px-4 mt-[15rem] sm:mt-[16rem] md:mt-[16rem] lg:mt-[10rem] bg-orange-50">
                <h2 className='text-4xl font-semibold text-center py-2'>Why Choose <span className='text-orange-600'>Us</span></h2>
                <h4 className='text-2xl font-semibold text-gray-600 text-center py-4'>Lakshya Vyasan Mukti Kendra Nashik provides 24*7 pickup facility from home</h4>
                <p className='text-lg text-center font-semibold py-3'>Our goal is to help our patients home like environment in our de-addiction center in Nashik</p>
            </div>
            <div className="facilities px-5 py-3 bg-orange-50">
                <div className='text-base flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-40 sm:w-full'>
                    <div>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Hygenic Food</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Experienced Doctors</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Well Mannered Staff</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> 24*7 CCTV Serveillance</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Security Guard</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Family Counseling</h3>
                    </div>
                    <div>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Indoor and Outdoor Games</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> One to one counseling</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Gardening</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Healthy Environment</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Meditation</h3>
                        <h3><span className='bg-orange-500 px-1 rounded-full text-white text-lg'>✔</span> Yoga Session</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='card py-4 w-full flex flex-col gap-3 px-2 sm:flex md:w-1/3 md:flex-row md:px-1 lg:px-2 lg:gap-4 items-center h-full'>
                    <img src="/img/e3.jpeg" className='h-full' alt="" />
                    <img src="/img/e1.jpeg" className='h-full' alt="" />
                    <img src="/img/banner3.jpg" className='h-full' alt="" />
                </div>
            </div>
            <div className='px-3 py-4 bg-orange-50'>
                <h2 className='text-xl font-bold px-2 text-orange-500'>Services Offered</h2>
                <div className='list pl-5 my-2 flex flex-col gap-3 sm:flex-row items-center justify-center sm:gap-32'>
                    <div>
                        <h2 className='text-lg font-normal'>1. DETOXIFICATION</h2>
                        <h2 className='text-lg font-normal'>2. ALCOHOL ADDICTION TREATMENT (शराब व्यसन उपचार केंद्र )</h2>
                        <h2 className='text-lg font-normal'>3. DE ADDICTION</h2>
                        <h2 className='text-lg font-normal'>4. DE ADDICTION AND REHABILITATION CENTER</h2>
                    </div>
                    <div>
                        <h2 className='text-lg font-normal'>5. DRUG ADDICTION TREATMENT CENTER</h2>
                        <h2 className='text-lg font-normal'>6. ALCOHOLISM TREATMENT</h2>
                        <h2 className='text-lg font-normal'>7. VYASAN MUKTI KENDRA</h2>
                        <h2 className='text-lg font-normal'>8. REHABILITATION CENTER</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
