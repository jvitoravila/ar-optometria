import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {
    NavBarStyl,
} from './styled'

const NavBarMenu = () => {
    return (
        <NavBarStyl>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">AR Optometria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                    <Nav>
                        
                        <Link href="/list">
                            Listagem de pacientes
                        </Link>
                    
                        <Link href="/create">
                            Cadastrar paciente
                        </Link>
                        
                        
                    </Nav>
                
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
            </Navbar>
        </NavBarStyl>
    )
}

export default NavBarMenu 