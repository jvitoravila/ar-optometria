import TableList from '../components/TableList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarMenu from '../components/NavBarMenu';

const List = () => {
    return (
        <>
            <NavBarMenu />
            <Container>
                <Row>
                    <Col md={{ span: 12}}>
                        <TableList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default List