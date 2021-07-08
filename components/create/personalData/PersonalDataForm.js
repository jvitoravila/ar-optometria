import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const PersonalData = (props) => {
    const { updatePayloadPersonalData } = props
    const updateData = (field, value) => {
        updatePayloadPersonalData(field, value)
    }
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Dados pessoais
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome do paciente</Form.Label>
                        <Form.Control type="text" required onChange={(event) => { updateData('patient', event.target.value) }} placeholder="Preencha com seu usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" onChange={(event) => { updateData('date', event.target.value) }} placeholder="Preencha com sua senha" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ocupação</Form.Label>
                        <Form.Control type="text" onChange={(event) => { updateData('occupation', event.target.value) }} placeholder="Preencha com seu usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" onChange={(event) => { updateData('age', event.target.value) }} placeholder="Preencha com seu usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="number" onChange={(event) => { updateData('phone', event.target.value) }} placeholder="Preencha com seu usuário" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="radio" id="masculino" onClick={(event) => { updateData('gender', event.target.value) }} name="sexo" label="Masculino" />
                        
                            <Form.Check type="radio" id="feminino" onClick={(event) => { updateData('gender', event.target.value) }} name="sexo" label="Feminino" />
                        </Form.Group>
                    </Form.Group>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default PersonalData