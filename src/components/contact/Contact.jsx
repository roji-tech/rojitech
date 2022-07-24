import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import { ContactWrap } from "./contactStyle";
import ContactBox from "./contactBox";
import {
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  let size = 30;
  let color = "var(--bg-white)";
  let mySocials = [
    {
      id: 1,
      text: "WhatsApp",
      icon: <FaWhatsapp size={size} color={color} />,
      link: "",
    },
    {
      id: 2,
      text: "LinkedIn",
      icon: <FaLinkedin size={size} color={color} />,
      link: "",
    },
    {
      id: 3,
      text: "Telegram",
      icon: <FaTelegram size={size} color={color} />,
      link: "",
    },
    {
      id: 4,
      text: "Twitter",
      icon: <FaTwitter size={size} color={color} />,
      link: "",
    },
    {
      id: 5,
      text: "GitHub",
      icon: <FaGithub size={size} color={color} />,
      link: "https://github.com/roji-tech",
    },
  ];

  return (
    <ContactWrap id="contact">
      <Heading>
        <h1>Contact Me</h1>
        <UnderStroke />
      </Heading>

      <div className="contact">
        <div className="socials">
          {mySocials.map(({ id, text, icon, link }) => (
              <ContactBox key={id} icon={icon} link={link} text={text} />
          ))}
        </div>
        <form>
          <input type="text" name="name" id="name" placeholder="Your Nane" />

          <input type="email" name="email" id="email" placeholder="Email" />

          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="4"
          ></textarea>

          <button>Send</button>
        </form>
      </div>
    </ContactWrap>
  );
};

export default Contact;
