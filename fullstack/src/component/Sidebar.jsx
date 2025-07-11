import { Navbar, Nav, NavDropdown, Container, Button, NavbarCollapse } from 'react-bootstrap';


export default function Sidebar() {
  return (
    <div style={{
      width: '18%',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      position: 'fixed',
      left: 0,
      top: 0,
      padding: '1rem'
    }}>
      <Navbar expand="lg" className="flex-column">
        <Container fluid className='flex-column'>
        <Navbar.Brand href="#home">TO_DO LIST</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <NavbarCollapse id='offcanvasNavbar'>
        <Nav variant="tabs" className="flex-column">
        <Button variant="primary" size="sm" className="my-2" style={{ width:"15em",        }}>Large button</Button>
        <Nav.Link href="">All tasks</Nav.Link>
          <Nav.Link href="">important tasks</Nav.Link>
          <Nav.Link href="">Completed tasks</Nav.Link>
          <Nav.Link href="">Uncompleted tasks</Nav.Link>
          <NavDropdown title="Directories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Secondary</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Main</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}