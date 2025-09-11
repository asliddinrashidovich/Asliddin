import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { portfolioBigData, portfolioMiniData } from '@/data/data';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="500">Portfolio</h2>
            <div data-aos="fade-up" data-aos-duration="700" className="line"></div>
            <h3 data-aos="fade-up" data-aos-duration="500" className="myworks">My Works</h3>
            <div className="portfolio__cards">
                {portfolioBigData.map(item => (
                    <div key={item.demo} data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                        <div className="port">
                            <a target="_blank" href={item.github} className="portfolio_link">
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a target="_blank" href={item.demo} className="portfolio_link">
                                <CiGlobe />
                                <span>Demo</span>
                            </a>
                        </div>
                        <img src={item.img} alt="portfolio img"/>
                    </div>
                ))}
            </div>
            <div className="mini_portfolioCards">
                {portfolioMiniData.map(item => (
                    <div key={item.github} data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                        <div className="port">
                            <a target="_blank" href={item.github}  className="portfolio_link">
                                <FaGithub />
                            </a>
                            <a target="_blank" href={item.demo} className="portfolio_link">
                                <CiGlobe />
                            </a>
                        </div>
                        <img src={item.img} alt="mini portfolio img"/>
                    </div>
                ))}
            </div>
        </div>
        <div className="container">
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Awards</h3>
            <div className="awards ">
                <div className="award__content">
                    <h4 data-aos="fade-up" data-aos-duration="900">Finalist of the Republican <span className="marked">Mathematics Olympiad</span></h4>
                    <p data-aos="fade-up" data-aos-duration="900">I participated in the Republican Mathematics Olympiad organized by PDP University & IT Park in 2023. I scored high points and became a participant in the final stage. In addition, I have participated in many competitions in Chess and Mathematics and have won many competitions.</p>
                </div>
                <div  data-aos="fade-up" data-aos-duration="500" className="award__img relative w-[500px] ">
                    <img src="./images/awards/certificateFinal.png" alt="sertificate"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Portfolio