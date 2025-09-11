"use client"

import Link from "next/link"
import { GridPattern } from "./magicui/grid-pattern"
import { cn } from "@/lib/utils"
import { FlickeringGridRoundedDemo } from "./magic-ui/background-sqr"
import { FaInstagram } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HyperText } from "./magicui/hyper-text";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { ShimmerButton } from "./magicui/shimmer-button"


function Hero() {
  const iconRef1 = useRef(null);
  const innerRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const innerRef2 = useRef(null);
  const iconRef3 = useRef(null);
  const innerRef3 = useRef(null);
  const iconRef4 = useRef(null);
  const innerRef4 = useRef(null);

  const handleMouseMove = (e, tarB, tarI) => {
    const icon = tarB.current;
    const inner = tarI.current;

    const rect = icon.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;

    icon.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
    inner.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
  };

  const handleMouseLeave = (tarB, tarI) => {
    tarB.current.style.transform = "translate(0px, 0px)";
    tarI.current.style.transform = "translate(0px, 0px)";
  };

  function handleDownload() {
    const fileUrl = "/images/CV/Asliddin_Resume.pdf";
    const fileName = "Asliddin_Resume";
  
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a)
  }
  return (
    <section className="pt-[170px] pb-[100px] min-h-[100vh] bg-[#fff] px-5 md:px-10" id="hero">
      <div className="brightnes-50 z-0">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] brightness-[99%]",
          )}
        />
      </div>
      <FlickeringGridRoundedDemo/>
      <div className="max-w-[1200px] mx-auto relative z-[99]  grid lg:grid-cols-2 lg:flex items-center ">
        <div className="max-w-[650px]">
          <h2 className="font-medium lg:font-[700] flex gap-[10px] items-center text-[#999] text-3xl lg:text-4xl">I am <HyperText>Asliddin</HyperText></h2>
          <h1 className="font-bold  text-4xl lg:text-6xl mb-5 lg:mb-7">Frontend Developer</h1>
          <p className="opacity-[70%] text-xs lg:text-xl mb-7">I am a software engineer specializing in creating modern, scalable, and user-friendly applications. Skilled in problem solving and working independently, you can find out about me here.</p>
          <div className="flex gap-5 asliddin mb-5"> 
            <button ref={iconRef1} className="transiti"
              onMouseMove={(e) => handleMouseMove(e, iconRef1, innerRef1)}
              onMouseLeave={() => handleMouseLeave(iconRef1, innerRef1)} >
              <Link  className="hero_icon" target="_blank" href="https://www.instagram.com/asliddin.norboyev_/">
                <FaInstagram ref={innerRef1} className="icon" fontSize={20}/>
              </Link>
            </button>
            <button ref={iconRef2}
              onMouseMove={(e) => handleMouseMove(e, iconRef2, innerRef2)}
              onMouseLeave={() => handleMouseLeave(iconRef2, innerRef2)} >
              <Link  className="hero_icon" target="_blank" href="https://t.me/asliddin_it_blog">
                <SiTelegram ref={innerRef2} className="icon" fontSize={20}/>
              </Link>
            </button>
            <button ref={iconRef3}
              onMouseMove={(e) => handleMouseMove(e, iconRef3, innerRef3)}
              onMouseLeave={() => handleMouseLeave(iconRef3, innerRef3)} >
              <Link  className="hero_icon" target="_blank" href="https://www.youtube.com/@AsliddinNorboyev_blog">
                <FaYoutube ref={innerRef3} className="icon" fontSize={20}/>
              </Link>
            </button>
            <button ref={iconRef4}
              onMouseMove={(e) => handleMouseMove(e, iconRef4, innerRef4)}
              onMouseLeave={() => handleMouseLeave(iconRef4, innerRef4)} >
              <Link  className="hero_icon" target="_blank" href="https://www.linkedin.com/in/asliddin-rashidovich-774624336/">
                <FaLinkedin ref={innerRef4} className="icon" fontSize={20}/>
              </Link>
            </button>
          </div>
          <ShimmerButton onClick={handleDownload} className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 flex gap-[10px] lg:text-lg">
              Download CV 
              <FiDownload />
            </span>
          </ShimmerButton>
        </div>
        <div className="max-w-[800px] lg:max-w-[600px] max-h-[800px] lg:max-h-[600px]  mx-auto rounded-full order-[-1] lg:order-none select-none mb-10 lg:mb-0 ">
          <img src="./images/hero/hero_img.png" alt="hero img" className="w-full h-full rounded-full object-cover pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero