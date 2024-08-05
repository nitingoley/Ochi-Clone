import React, { useEffect, useState } from 'react';

const Eye = () => {
    const [rotate , setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            // console.log(e);
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let x = mouseX - window.innerWidth/2;
        let y = mouseY - window.innerWidth/2;
        
        var angle = Math.atan2(x , y) * (180/Math.PI);

        setRotate(angle - 180)
            
        })
    })
    return (
        <div className='eye w-full  h-[60vw] border-5xl overflow-hidden'>
        <div data-scroll  data-scroll-speed="-.8"
            className='relative w-full h-full bg-center bg-cover'
            style={{ backgroundImage: "url('/gg.jpg')" }}
        >
            <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='w-[15vw] flex justify-center items-center rounded-full h-[15vw] bg-zinc-100'>
                    <div style={{ transform: ` rotate(${rotate}deg)` }} className='relative w-2/3 h-2/3 rounded-full flex justify-center items-center bg-zinc-900'>
                        <div className='line w-full h-10' style={{ transform: `rotate(${rotate}deg)` }}>
                            <div className='w-10 h-10 rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] rounded-full flex justify-center items-center h-[15vw] bg-zinc-100'>
                    <div style={{ transform: `rotate(${rotate}deg)` }} className='relative w-2/3 h-2/3 flex justify-center items-center rounded-full bg-zinc-900'>
                        <div className='line w-full h-10' style={{ transform: `rotate(${rotate}deg)` }}>
                            <div className='w-10 h-10 rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}


export default Eye;
