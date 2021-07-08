import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const ClinicalData = (props) => {
    const { updatePayloadClinicalData } = props
    const updateData = (field, value) => {
        updatePayloadClinicalData(field, value)
    }
    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Dados clínicos
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Uso de óculos</Form.Label>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" id="sim" name="uso_de_oculos" onChange={(event) => { updateData('glasses', event.target.value) }} label="Sim" />
                    
                        <Form.Check type="radio" id="nao" name="uso_de_oculos" onChange={(event) => { updateData('glasses', event.target.value) }} label="Não" />
                    </Form.Group>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Motivo da consulta</Form.Label>
                    <Form.Control as="textarea" onChange={(event) => { updateData('reason', event.target.value) }} rows={6} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Antecedentes pessoais</Form.Label>
                    <Form.Control as="textarea" onChange={(event) => { updateData('personalBackground', event.target.value) }} rows={3} />
                </Form.Group>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ClinicalData