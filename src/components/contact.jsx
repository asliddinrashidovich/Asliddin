import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegram, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="container">
            <h2  data-aos="fade-right" data-aos-duration="700">Contact</h2>
            <div  data-aos="fade-up" data-aos-duration="700" className="line"></div>
            <div className="contact__layout">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6001.251530246643!2d69.1897395!3d41.2299252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6142a6821c75%3A0x4d7696796e5a7021!2sCHOSHTEPA%2014-DOM!5e0!3m2!1sen!2s!4v1746458883586!5m2!1sen!2s" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="contact__content">
                    <h4  data-aos="fade-up" data-aos-duration="500">Address</h4>
                    <div  data-aos="fade-up" data-aos-duration="700" className="contact__form">
                        <a target="_blank" href="https://maps.app.goo.gl/ufTf85dWUk2HqsQy6" className="contact__link">
                            <div className="form__logo">
                                <FaLocationDot className="text-[30px] text-[#21c998]"/>
                            </div>
                            <h3>
                                <span className="marked">Location:</span><br/>
                                <span className="text">1th Floor, Plat No.1, 14-O'zar Street, Choshtepa, Toshkent</span>
                            </h3>
                        </a>
                        <div className="hr"></div>
                            <a  href="tel:+998946092401" className="contact__link">
                                <div className="form__logo">
                                    <FaPhoneAlt className="text-[30px] text-[#21c998]"/>
                                </div>
                                <h3>
                                    <span className="marked">Phone:</span><br/>
                                    <span className="text">+998-94-609-24-01</span>
                                </h3>
                            </a>
                        <div className="hr"></div>
                        <a target="_blank" href="mailto:asliddinrashidovich7@gmail.com" className="contact__link">
                            <div className="form__logo">
                                <IoMdMail className="text-[30px] text-[#21c998]" />
                            </div>
                            <h3>
                                <span className="marked">Email:</span><br/>
                                <span className="text contect_email">asliddinrashidovich7@gmail.com</span>
                            </h3>
                        </a>
                    </div>
                    <h4  data-aos="fade-up" data-aos-duration="500">Follow Me</h4>
                    <div  data-aos="fade-up" data-aos-duration="500" className="icons">
                        <a target="_blank" href="https://www.instagram.com/asliddin.norboyev_/" className="brand__link">
                            <FaInstagram className="text-[22px] text-[#fff]"/>
                        </a>  
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61568348277987" className="brand__link">
                            <FaFacebookF className="text-[22px] text-[#fff]"/>
                        </a>  
                        <a target="_blank" href="https://www.youtube.com/@AsliddinNorboyev_blog" className="brand__link">
                            <FaYoutube className="text-[22px] text-[#fff]"/>
                        </a>  
                        <a target="_blank" href="https://t.me/asliddin_it_blog" className="brand__link">
                            <FaTelegram className="text-[22px] text-[#fff]"/>
                        </a>  
                        <a target="_blank" href="https://www.linkedin.com/in/asliddinnorboyev"  className="brand__link">
                            <FaLinkedinIn className="text-[22px] text-[#fff]"/>
                        </a>  
                        <a target="_blank" href="https://github.com/asliddinrashidovich" className="brand__link">
                            <FaGithub className="text-[22px] text-[#fff]"/>
                        </a>  
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact