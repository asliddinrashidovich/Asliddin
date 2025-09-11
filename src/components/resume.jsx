"use client"

import React from 'react'
import { ShineBorder } from './magicui/shine-border'
import { GoBook } from "react-icons/go";
import { educationData, experienceData, skillsData } from '@/data/data';
import { CiLocationOn } from "react-icons/ci";
import { FaToolbox } from 'react-icons/fa6';
  
function Resume() {
  return (
    <section className="resume" id="resume">
        <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="300">Resume</h2>
            <div data-aos="fade-up" data-aos-duration="500" className="line"></div>
            <div className="resume__cards">
                <div className="resume__education">
                    <div data-aos="fade-down-right" data-aos-duration="500" className="gap-[15px] items-center flex mb-[25px]">
                        <GoBook className='text-[30px] text-[#21c998]'/>
                        <h3 className='text-[25px] font-[500]'>My Education</h3>
                    </div>
                    {educationData.map(item => (
                        <div key={item.paragrapgh} className="resume__card relative overflow-hidden">
                            <ShineBorder shineColor={"#21c998"} />
                            <div className='flex justify-between items-center'>
                                <h4 className="marked">{item.duration}</h4>
                                <h5 className='text-[#21c998] text-[17px] flex gap-[4px] items-center'><CiLocationOn /> {item.location}</h5>
                            </div>
                            <h4 className="card__title">{item.title}</h4>
                            <p>{item.paragrapgh}</p>
                        </div>
                    ))}
                </div>
                <div className="resume__experience">
                    <div data-aos="fade-down-left" data-aos-duration="500" className="gap-[15px] items-center flex mb-[25px]">
                        <FaToolbox className='text-[30px] text-[#21c998]'/>
                        <h3>My Experience</h3>
                    </div>
                    {experienceData.map(item => (
                        <div key={item.paragrapgh} className="resume__card relative overflow-hidden">
                            <ShineBorder shineColor={"#21c998"} />
                            <div className='flex justify-between items-center'>
                                <h4 className="marked">{item.duration}</h4>
                                <h5 className='text-[#21c998] text-[17px] flex gap-[4px] items-center'><CiLocationOn /> {item.location}</h5>
                            </div>
                            <h4 className="card__title">{item.company}</h4>
                            <h6 className="text-[#fefefe] mb-[20px]">{item.job}</h6>
                            <p>{item.paragrapgh}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
        <div className="container">
            <h3 data-aos="fade-up" data-aos-duration="500">Skills</h3>
            <div className="skills">
                {skillsData.map(item => (
                    <div key={item.img} data-aos="zoom-in" data-aos-duration="500" className="skill">
                        <img src={item.img} alt="skill"/>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>  
    </section>
  )
}

export default Resume