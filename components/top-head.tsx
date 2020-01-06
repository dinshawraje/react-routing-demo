import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
export const TopHead: React.FC =() => {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Skill Matrix Project</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/emp-detail-form">EmpSkillForm</Nav.Link>
        <Nav.Link href="/test-emp-form">TestForm</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    );
}