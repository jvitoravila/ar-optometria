
import Create from '../components/Create'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarMenu from '../components/NavBarMenu';

const Home = () => {
    return (
        <>
            <NavBarMenu />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Create />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
