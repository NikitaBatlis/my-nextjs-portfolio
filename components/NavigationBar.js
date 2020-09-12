import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const linkStyle = {
  marginRight: 15
}

const NavigationBar = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#pageTop">
      <img
        alt="logo"
        src="../static/svg/logo_icon.svg"
        width="40"
        height="35"
        className="d-inline-block align-top"
      />{` `}
      <Link href="/"><a className="text-muted" style={linkStyle}>Nikita Batlis</a></Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link href="/about"><a className="text-muted" style={linkStyle}>About</a></Link>
      <Link href="/portfolio"><a className="text-muted" style={linkStyle}>Portfolio</a></Link>
    </Nav>
  </Navbar>
)

export default NavigationBar;