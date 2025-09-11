import { FaPhoneAlt } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="container">
            <a href="index.html" className="logo">
                <img src="./images/footer/header.svg" alt="footer logo"/>
            </a>
            <a href="tel:+998946092401" className="phone">
                <FaPhoneAlt className="text-[30px] text-[#21c998]"/>
            </a>
        </div>
    </footer>
  )
}

export default Footer