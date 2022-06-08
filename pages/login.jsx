import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <div className="my-5">
        <Heading text={"Contact"} />
      </div>
      <div className="my-5">
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
