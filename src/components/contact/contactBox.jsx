import { ContactBoxStyle } from "./contactStyle";

const ContactBox = ({ link, icon, text }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <ContactBoxStyle>
        {icon}
        <p> {text} </p>
      </ContactBoxStyle>
    </a>
  );
};

export default ContactBox;
