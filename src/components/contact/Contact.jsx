import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import { ContactWrap } from "./contactStyle";
import ContactBox from "./contactBox";
import { FaWhatsapp, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  let size = 30;
  let color = "var(--blue1)";
  let mySocials = [
    {
      text: "WhatsApp",
      icon: <FaWhatsapp size={size} color={color} />,
    },
    {
      text: "LinkedIn",
      icon: <FaLinkedin size={size} color={color} />,
    },
    {
      text: "Telegram",
      icon: <FaTelegram size={size} color={color} />,
    },
    {
      text: "Twitter",
      icon: <FaTwitter size={size} color={color} />,
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
          {mySocials.map(({ text, icon }) => (
            <a href="">
              <ContactBox icon={icon} text={text} />
            </a>
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
          ></textarea>

          <button>Send</button>
        </form>
      </div>
    </ContactWrap>
  );
};

export default Contact;
