"use client"

import { FiDownload } from "react-icons/fi"
import { ShimmerButton } from "./magicui/shimmer-button"

function About() {
    const now = new Date()
    const age = now.getFullYear() - 2006
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
    <section id="about" className="bg-[#212429] py-10 lg:py-20 relative">
        <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold text-white mb-3">About Me</h2>
        <div className="w-[100px] lg:w-[150px] h-1 rounded-full mx-auto bg-[#21c998] mb-10 lg:mb-20"></div>
        <div className="block lg:flex justify-between gap-[50px]">
            <div className="max-w-[800px] mx-auto lg:mx-0 mb-10 lg:mb-0">
                <h3 className="text-white text-center lg:text-start text-2xl lg:text-4xl font-medium lg:font-semibold mb-5">I am 
                    <span className="text-[#21c998]"> Asliddin Norboyev Rashidovich, </span> <br />
                    a Software Engineer
                </h3>
            <p className="text-white text-center text-xs lg:text-xl lg:text-start opacity-[70%] mb-3 lg:mb-5">I was born on January 24, 2006 in a small town in the Zjarkurgan district of the Surkhandarya region of the Republic of Uzbekistan. My main profession is programming.</p>
            <p className="text-white text-center text-xs lg:text-xl lg:text-start opacity-[70%]">I am interested in the digital technology and I am constantly trying to learn technologies that will be useful to humanity.</p>
            </div>
            <div className="lg:max-w-[400px] w-full ">
                <h4 className="my-3 text-white text-[14px] lg:text-[16px]">Name: Asliddin Norboyev</h4>
            <div className="w-full h-[1px] bg-[#555]"></div>
                <h4 className="text-white text-[14px] lg:text-[16px] my-3">Tel: <a href="tel:+998946092401" className="text-[#21c998]">+998946092401</a></h4>
            <div className="w-full h-[1px] bg-[#555]"></div>
            <h4 className="text-white text-[14px] lg:text-[16px] my-3">Age: {age}</h4>
            <div className="w-full h-[1px] bg-[#555]"></div>
            <h4 className="text-white text-[14px] lg:text-[16px] mt-3 mb-8" >From: O'zbekiston, Surxondaryo</h4>
            <ShimmerButton onClick={handleDownload} className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 flex gap-[10px] lg:text-lg">
                    Download CV 
                    <FiDownload />
                </span>
            </ShimmerButton>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About