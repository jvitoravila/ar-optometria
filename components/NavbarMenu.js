import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NavBarMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">AR Optometria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                        <Link href="/list">
                            Listagem de pacientes
                        </Link>
                    
                        <Link href="/create">
                            Cadastrar paciente
                        </Link>
                    
                    
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarMenu 