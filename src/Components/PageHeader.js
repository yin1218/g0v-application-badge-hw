import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';



const PageHeader = () => {
    return(
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="#">g0v Badge</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Login / Sign Up" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://google.com" target="_blank">
                    <Icon icon="logos:slack-icon" width="24" />
                    {' '}Slack
                </NavDropdown.Item>
                <NavDropdown.Item href="https://slack.com" target="_blank">
                    <Icon icon="flat-color-icons:google" width="24" />
                    {' '}Google
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com" target="_blank">
                    <Icon icon="akar-icons:github-fill" width="25" />
                    {' '}GitHub
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default PageHeader;
