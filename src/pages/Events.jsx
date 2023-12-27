import React from 'react'

const Events = () => {
    return (
        <div className='bg-orange-50 h-full w-full'>
            <div className='px-3 py-3 flex flex-col gap-4 lg:w-[80%] lg:m-auto'>
                <div className='bg-white md:flex md:items-center rounded-md'>
                    <div className='order-1 flex-1'><img src="/img/e1.jpeg" className='h-full' alt="" /></div>
                    <div className='px-4 pb-2 flex-1'>
                        <h2 className='text-2xl font-semibold cursor-pointer hover:text-orange-500 py-3'>Harmony in Motion: Transformative Yoga Session</h2>
                        <p className='text-base font-normal'>Join us for a rejuvenating yoga session that transcends the boundaries of physical exercise to create a holistic experience of mind, body, and spirit alignment. Immerse yourself in a guided journey of self-discovery, where each pose becomes a stepping stone towards inner peace and balance. Whether you're a seasoned yogi or a beginner, this session is designed to cultivate mindfulness, enhance flexibility, and promote overall well-being</p>
                    </div>
                </div>
                <div className='bg-white md:flex md:items-center'>
                    <div className='flex-1 order-1'><img src="/img/e2.jpeg" className='h-full' alt="" /></div>
                    <div className='px-4 pb-2 flex-1'>
                        <h2 className='text-2xl font-semibold cursor-pointer hover:text-orange-500 py-3'>Wellness Warriors: Nourish Your Body, Energize Your Life</h2>
                        <p className='text-base font-normal'> Embark on a transformative health journey with our Wellness Warriors session, dedicated to revitalizing your mind and body. Discover the keys to holistic well-being through expert guidance on nutrition, fitness, and mindful living. Whether you're seeking practical tips for a balanced lifestyle or aiming to revamp your fitness routine, this session offers a comprehensive approach to health</p>
                    </div>
                </div>
                <div className='bg-white md:flex md:items-center'>
                    <div className='flex-1 order-1'><img src="/img/e3.jpeg" className='h-full' alt="" /></div>
                    <div className='px-4 pb-2 flex-1'>
                        <h2 className='text-2xl font-semibold cursor-pointer hover:text-orange-500 py-3'>Recovery Haven: Comfortable Spaces for Healing and Renewal</h2>
                        <p className='text-base font-normal'>Discover a supportive environment for your journey to wellness in our thoughtfully designed rooms, catering to both relaxation and de-addiction needs. Whether you're seeking respite from the demands of everyday life or embarking on a path to recovery, our accommodations provide a serene backdrop for your transformative experience.
                        <br />
                        Choose a room that aligns with your needs, and let our space be a catalyst for your renewal. Book now and embark on a journey to recovery and revitalization. Welcome to a place where healing begins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
