import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
// motion
function Home() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className="bg-slate-200 w-full h-screen pt-1">
            <div className="textstructure mt-40 px-20">
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex items-end overflow-hidden ">
                                {index === 1 && (
                                    <motion.div
                                     initial={{width:0}}
                                     animate= {{width: "9vw"}}
                                     transition={{ease:  [0.76 , 0 , 0.24,1] , duration:1}}
                                     className="mr-[1vw] w-[9vw]  rounded-md h-[6vw] -top-[0.1vw] relative">
                                        <img className="pt-2 rounded-xl" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                    </motion.div>
                                )}
                                <h1 className="uppercase leading-[7vw] tracking-tighter font-semibold text-[7vw]">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] border-gray-400 mt-20 flex h-auto justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p key={index} className="text-md -pt-20 leading-none font-semibold tracking-tight">{item}</p>
                )}

                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-md uppercase">
                        Start the project
                    </div>
                    <div className="w-10 h-10 flex items-center  border-zinc-500 justify-center rounded-full border-[2px]">
                        <span className="rotate-45">
                            <FaArrowUp />
                        </span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;
