import { ContactBoxStyle } from "./contactStyle";
import LightModeFunc from "../../Context";

const ContactBox = ({ link, icon, text }) => {
  const { lightMode } = LightModeFunc();

  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <ContactBoxStyle lightMode={lightMode}>
        {icon}
        <p> {text} </p>
      </ContactBoxStyle>
    </a>
  );
};

export default ContactBox;
