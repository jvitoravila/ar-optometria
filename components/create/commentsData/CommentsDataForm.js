import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const CommentsData = (props) => {
    const { updatePayloadCommentsData } = props
    const updateData = (field, value) => {
        updatePayloadCommentsData(field, value)
    }
    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Conduta e Observações
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Conduta</Form.Label>
                    <Form.Control as="textarea" onChange={(event) => { updateData('conduct', event.target.value) }} rows={6} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Observações</Form.Label>
                    <Form.Control as="textarea" onChange={(event) => { updateData('note', event.target.value) }} rows={6} />
                </Form.Group>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default CommentsData