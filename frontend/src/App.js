import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Support Desk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 jusify-content-end">
                <a href="/admin" className="nav-link" target="_blank">
                  Admin
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Support Desk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  w-100  justify-content-end">
                <a href="/admin" className="nav-link" target="_blank">
                  Admin
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header> */}
      <main>main</main>
      <footer className="mt-auto">
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
