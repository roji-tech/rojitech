import { ContactBoxStyle } from "./contactStyle";

const ContactBox = ({ icon, text }) => {
  return (
    <ContactBoxStyle>
      {icon}
      <p> {text} </p>
    </ContactBoxStyle>
  );
};

export default ContactBox;
