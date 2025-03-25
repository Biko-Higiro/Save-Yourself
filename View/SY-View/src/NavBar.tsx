import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-danger border border-dark w-100"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">Save Yourself</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //   <a href="/">SAVE YOURSELF</a>
    //   <ul>
    //     <li>
    //       <a href="/About"> About</a>
    //     </li>
    //     <li>
    //       <a href="/Pricing"> Pricing</a>
    //     </li>
    //     <li>
    //       <a href="/Login">Login</a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
