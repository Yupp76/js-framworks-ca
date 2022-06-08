import { Navbar, Nav, Container } from "react-bootstrap";

import Link from "next/link";
import { v4 as uuid } from "uuid";

const NavLinks = [
  { text: "home", link: "/" },
  { text: "contact", link: "/contact" },
  { text: "login", link: "/login" },
];

const CustomNav = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {NavLinks.map((item) => {
              return (
                <Link key={uuid()} href={item.link} passHref>
                  <Nav.Link>{item.text}</Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
