import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const TopHead: React.FC =() => {
    return (
      <Navbar bg="light" variant="light">
          <Link to="/" className='navbar-brand'>Skill Matrix Project</Link>
          <Nav className="mr-auto">
            <Link to="/emp-detail-form" className='nav-link'>EmpSkillForm</Link>
            <Link to="/test-emp-form" className='nav-link'>TestForm</Link>
            <Link to="#pricing" className='nav-link'>Pricing</Link>
          </Nav>
      </Navbar>
    );
}