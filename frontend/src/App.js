import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header>
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
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
          </Container>
        </main>
        <footer className="mt-auto">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
