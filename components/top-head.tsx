import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const TopHead: React.FC =() => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/" className='navbar-brand'>Skill Matrix Project</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/emp-detail-form" className='nav-link'>EmpSkillForm</Link>
            <Link to="/test-emp-form" className='nav-link'>TestForm</Link>
            <Link to="#pricing" className='nav-link'>Pricing</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}