import "./navBar.scss"
import CartWidget from "./CartWidget/CartWidget"
import UsuarioNavBar from "./UsuarioNavBar/UsuarioNavBar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


const NavBar = () => {
    return (
    <header>
        <nav className="headerNav1">
            <img src="\public\imagenes\Screenshot_10.png" className="headerLogo" alt="Summo Store Logo" />
            <div className="headerDivInput">
                <img src="\public\imagenes\searchIcon.png" alt="icono búsqueda" />
                <input type="text" placeholder="Buscar" className="headerInput"/>
            </div>
            <UsuarioNavBar/>
            <CartWidget/>
        </nav>
        <nav className="headerNav2">
            <Navbar>
                <Nav>
                <div className="headerNav2Item"> </div>

                    <div className="headerNav2Item">
                    <NavDropdown title="Categorías" className="headerDropdown">
                        <NavDropdown.Item className="headerDropdownItem">
                            1
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                            2
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                            3
                        </NavDropdown.Item>
                    </NavDropdown>
                    </div>

                    <div className="headerNav2Item">
                        Ofertas
                    </div>

                    <div className="headerNav2Item">
                    <NavDropdown title="Todas las Marcas" className="headerDropdown">
                        <NavDropdown.Item className="headerDropdownItem">
                            1
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                            2
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                            3
                        </NavDropdown.Item>
                    </NavDropdown>
                    </div>

                    <div className="headerNav2Item"></div>
                </Nav>
            </Navbar>

        </nav>
    </header>
    )
}

export default NavBar