import "../components/Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="footer flex">
        <p>corporate.omkarjarad@gmail.com </p>
        <p>
          <BsLinkedin className="linkedinIcon" />
        </p>
        <p>
          <FaTelegramPlane className="telegramIcon" />
        </p>
        <p>
          <BsInstagram className="instaIcon" />
        </p>
      </footer>
    </>
  );
}

export default Footer;
