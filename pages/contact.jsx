import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <Container>
      <div className="my-5">
        <Heading text={"Contact"} />
      </div>
      <div className="my-5">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
