import "./styles.css";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Landpage() {
  return (
    <div className="My_App">
      <div className="My-App">
        <ul>
          <li>
            <a href="src\index.js">Home</a>
          </li>
          <li>
            <a href="#Feautures">Services</a>
          </li>
          <li>
            <a href="#services">Orders</a>
          </li>
          <li>
            <a href="src\Comp_1\index.js">Contact</a>
          </li>
        </ul>

        <div className="footer">
          <div className="footer-content">
            <div className="footer-section 1">
              <h1 className="logo-name">Blood Donation App</h1>
              <p>
                App connecting the blood donor and acceptor directly.The Blood
                Community app--The first app of its kind through which you can
                easily arrange blood in no time. This app contains information
                about people of all blood groups within your city throughout the
                world. You will be able to contact users through SMS or Call
                them when you are in need of blood.
              </p>
              <div class="Contact">
                <span>
                  <i>
                    <FaPhone />
                    &nbsp; 0900-786-01
                  </i>
                </span>
                <span>
                  <i>
                    <FaEnvelope />
                  </i>
                  &nbsp; huihuihui@gmail.com
                </span>
              </div>
              <div class="Socials">
                <i>
                  <FaFacebook />
                </i>
                <i>
                  <FaLinkedin />
                </i>
                <i>
                  <FaWhatsapp />
                </i>
                <i>
                  <FaYoutube />
                </i>
              </div>
            </div>
            <div className="footer-section 2">
              <h1 className="logo-name">Quick Links</h1>
              <dl>
                <dt>
                  <a href="hehe0">Events</a>
                </dt>
                <dt>
                  <a href="hehe1">Teams</a>
                </dt>
                <dt>
                  <a href="hehe2">Members</a>
                </dt>
                <dt>
                  <a href="hehe2">Details</a>
                </dt>
                <dt>
                  <a href="hehe2">Conditions</a>
                </dt>
                <dt>
                  <a href="hehe3">Terms And Condition</a>
                </dt>
              </dl>
            </div>
            <div className="footer-section 3">
              <h1 className="logo-name">Contact</h1>
              <form action="index.html" method="POST">
                <input
                  type="email"
                  name="email"
                  class="text-input contact-input"
                  placeholder="Your Email Password..."
                ></input>
                <br />
                <textarea
                  name="Message"
                  class="text-input contact-input"
                  placeholder="Your Message..."
                ></textarea>
                <br />
                <button type="submit" class="btn btn-big">
                  <i>
                    <FaEnvelope />
                    {""}
                  </i>
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            &copy;<a href> hassaan.bs25@gmail.com</a> || Hehe
          </div>
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          name="Search"
          placeholder="Type here to Search"
          autofocus
        ></input>
        <a
          className="App-link"
          href="src\Comp_1\index.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          boop
        </a> */}
      </div>
    </div>
  );
}

export default Landpage;
