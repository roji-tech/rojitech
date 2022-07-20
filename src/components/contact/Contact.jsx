import { Heading } from "../../GlobalStyle";
import UnderStroke from "../../EXTRAS/UnderStroke/UnderStroke";
import { ContactWrap } from "./contactStyle";

const Contact = () => {
  return (
    <ContactWrap>
      <Heading>
        <h1>Contact Me</h1>
        <UnderStroke />
      </Heading>

      <form action="">
        <input type="text" name="name" id="name" placeholder="Your Nane" />

        <input type="email" name="email" id="email" placeholder="Email" />

        <textarea name="message" id="message" placeholder="Message"></textarea>

        <button>Send</button>
      </form>
    </ContactWrap>
  );
};

export default Contact;
