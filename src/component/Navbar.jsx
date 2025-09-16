import CardWidget from "./CardWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { NavLink } from "react-router";



function NavBar() {

  
    const [categories,setCategories]=useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error al traer productos:", err));
  }, []);

  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PUMA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nuevo</Nav.Link>
            <Nav.Link href="#features">Niños</Nav.Link>
            <Nav.Link href="#pricing">Deportes</Nav.Link>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            {categories.map(category => (
            <NavDropdown.Item as={NavLink} key={category.id} to={`/category/${category.name}`}>
              {category.name}
            </NavDropdown.Item>
            ))}
          </NavDropdown>
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link href="#home"><CardWidget></CardWidget></Nav.Link>
            <Nav.Link href="#features">Me gusta</Nav.Link>
            <Nav.Link href="#pricing">login</Nav.Link>
            
          </Nav>
        </Container>
        
      </Navbar>
    </>
  );
}

export default NavBar; 