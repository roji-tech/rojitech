import { useRef } from "react";
import { Heading } from "../../StyleGlobal";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import { ContactWrap } from "./contactStyle";
import ContactBox from "./contactBox";
import {
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import LightModeFunc from "../../Context";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const { lightMode } = LightModeFunc();
  let size = 30;
  let color = !lightMode ? "var(--bg-blue)" : " var(--blue)";
  let mySocials = [
    {
      id: 1,
      text: "WhatsApp",
      icon: <FaWhatsapp size={size} color={color} />,
      link: "https://wa.me/+2347015910956"
    },
    {
      id: 2,
      text: "LinkedIn",
      icon: <FaLinkedin size={size} color={color} />,
      link: "https://www.linkedin.com/in/abdullah-jamiu-660902225"
    },
    {
      id: 3,
      text: "Telegram",
      icon: <FaTelegram size={size} color={color} />,
      link: "https://t.me/Rojitech"
    },
    {
      id: 4,
      text: "Twitter",
      icon: <FaTwitter size={size} color={color} />,
      link: "https://twitter.com/Rojitech_code?t=F2ILVDjYghsYP_luZA1SvQ&s=09"
    },
    {
      id: 5,
      text: "GitHub",
      icon: <FaGithub size={size} color={color} />,
      link: "https://github.com/roji-tech"
    }
  ];

  const ClearInputs = () => {
    nameRef.current.value = "";
    messageRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
  };

  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(ClearInputs, 1000);
  };

  return (
    <ContactWrap lightMode={lightMode} id="contact">
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
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            placeholder="Your Nane"
          />

          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
          />

          <input
            ref={subjectRef}
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />

          <textarea
            ref={messageRef}
            name="message"
            id="message"
            placeholder="Message"
            rows="6"
          ></textarea>

          <button onClick={handleClick}>Send</button>
        </form>
      </div>
    </ContactWrap>
  );
};

export default Contact;
