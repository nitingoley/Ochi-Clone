import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 gap-8  tracking-thighter rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black '>
            <h1 className='text-[3vw] leading-[3.5vw]'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>

            <div className='w-full border-t-[2px] border-[rgb(189,216,93)] mt-16'>

                <div className='text flex justify-between items-center '>
                    <p className='py-20 text-md'>What you can expect:</p>
                    <p className='w-[20vw] text-md'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.  </p>
                </div>
            </div>
            <div className='w-full flex  border-t-[2px] border-[rgb(189,216,93)] mt-16'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'> Our approach</h1>
                    <button className='flex text-white uppercase gap-10 items-center px-10 py-6 mt-10 rounded-full bg-zinc-800'>
                        read more <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 mt-10 h-[70vh] rounded-2xl justify-between items-center'>
                <img className='h-[60vh]  rounded-3xl mt-1 '  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
