
import Login from '../components/Login'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Login />
                </Col>
            </Row>
        </Container>
  
    )
}

export default Home
