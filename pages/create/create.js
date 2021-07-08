
import Create from '../../components/create'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBarMenu from '../../components/navBarMenu'
import Header from '../../components/Header'

const Home = () => {
    return (
        <>
            <Header />
            <NavBarMenu />
            <Container>
                <Row>
                    <Col>
                        <Create />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
