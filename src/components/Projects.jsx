import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const staggeredAnimation = (hover) => ({
    y: hover ? 0 : "100%",
    opacity: hover ? 1 : 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      staggerChildren: 0.05,
    },
  });

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-400 pb-20">
        <h1 className="text-8xl tracking-tighter">Featured projects</h1>
      </div>

      {/* Create cards */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {[
            {
              title: "FYDE",
              imgSrc: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
            },
            {
              title: "VISE",
              imgSrc: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
            },
          ].map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="cardcontainer w-1/2 h-[75vh] relative"
            >
              <div className="card w-full h-full bg-cover rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src={project.imgSrc}
                  alt=""
                />
                <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-end pr-10">
                  <h1 className="text-[#CDEA68] text-5xl font-bold">
                    {project.title.split("").map((item, idx) => (
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={hoveredCard === index ? staggeredAnimation(true) : staggeredAnimation(false)}
                        key={idx}
                        className="block"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-container w-full h-full flex gap-10 pt-10 justify-between items-center">
          {["Brand Design", "Collaboration"].map((item, index) => (
            <p key={index} className="text-3xl">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Card 2 */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {[
            {
              title: "TRAWA",
              imgSrc: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
            },
            {
              title: "PREMIUM BLEND",
              imgSrc: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
            },
          ].map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 2)}
              onMouseLeave={handleMouseLeave}
              className="cardcontainer w-1/2 h-[75vh] relative"
            >
              <div className="card w-full h-full bg-cover rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src={project.imgSrc}
                  alt=""
                />
                <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-end pr-10">
                  <h1 className="text-[#CDEA68] text-5xl font-bold">
                    {project.title.split("").map((item, idx) => (
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={hoveredCard === index + 2 ? staggeredAnimation(true) : staggeredAnimation(false)}
                        key={idx}
                        className="block"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex items-center justify-center">
        <button className="flex items-center text-white uppercase gap-4 px-10 py-6 mt-10 rounded-full bg-zinc-800">
          View all case studies{" "}
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
