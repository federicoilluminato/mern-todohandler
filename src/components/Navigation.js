import React from 'react'
import { Navbar, Nav,  } from 'react-bootstrap'
import NavDropDown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const Navigation = () => {

    const { logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
                Gestor de Tareas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="marginPrueba">
                    <Nav.Link as={NavLink} to={routes.projects}>Projects
                    {/* <NavLink to="/projects">Projectos</NavLink> */}
                    </Nav.Link>         
                    <NavDropDown title="Admin">
                    <NavDropDown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropDown.Item>
                    </NavDropDown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesión</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                    <Nav.Link to={routes.account} onClick={logout} >Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
