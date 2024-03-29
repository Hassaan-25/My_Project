import "./styles.css";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section 1">
          <h1 className="logo-name">ʙʟᴏᴏᴅғɪɴᴅᴇʀ</h1>
          <p>
            App connecting the blood donor and acceptor directly.The Blood
            Community app--The first app of its kind through which you can
            easily arrange blood in no time. This app contains information about
            people of all blood groups within your city throughout the world.
            You will be able to contact users through SMS or Call them when you
            are in need of blood.
          </p>
          <div className="Contact">
            <span>
              <i>
                <FaPhone />
                &nbsp; 0900-786-01
              </i>
            </span>
            <span>
              <i>
                {" "}
                &nbsp;
                <FaEnvelope />
                {""}
              </i>
              &nbsp; BloodFinder@gmail.com
            </span>
          </div>
          <div className="Socials">
            <i>
              <FaFacebook />
            </i>
            <i>
              &nbsp;
              <FaLinkedin />
            </i>
            <i>
              &nbsp;
              <FaWhatsapp />
            </i>
            <i>
              &nbsp;
              <FaYoutube />
            </i>
          </div>
        </div>
        <div className="footer-section 2">
          <h1 className="logo-name">Quick Links</h1>
          <ul>
            <li>
              <a href="hehe0">Events</a>
            </li>
            <li>
              <a href="hehe1">Teams</a>
            </li>
            <li>
              <a href="hehe2">Members</a>
            </li>
            <li>
              <a href="hehe2">Details</a>
            </li>
            <li>
              <a href="hehe2">Conditions</a>
            </li>
            <li>
              <a href="hehe3">Terms And Condition</a>
            </li>
          </ul>
        </div>
        <div className="footer-section 3">
          <h1 className="logo-name">Contact</h1>
          <form action="index.html" method="POST">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your Email Password..."
            ></input>
            <br />
            <textarea
              name="Message"
              className="tarea"
              placeholder="Your Message..."
            ></textarea>
            <br />
            <button type="submit" className="footerbtn">
              <i>
                <FaEnvelope />
                {""}
              </i>
              &nbsp; Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">&copy; CHEEMZ.008@gmail.com || Hehe</div>
    </div>
  );
}

export default Footer;
