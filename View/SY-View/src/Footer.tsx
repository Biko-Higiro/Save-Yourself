import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-nav">
          <h5>
            {" "}
            <Nav.Link className="footer-nav-items" href="/Pricing">
              Pricing
            </Nav.Link>
          </h5>{" "}
          <h5>
            {" "}
            <Nav.Link className="footer-nav-items" href="/About">
              About
            </Nav.Link>
          </h5>{" "}
          <h5>
            {" "}
            <Nav.Link className="footer-nav-items" href="/Login">
              Login
            </Nav.Link>
          </h5>
        </div>
        <hr />
        <div className="company-logo">
          <p className="footer-copyright">&#169; Save Yourself est. 2025 </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
