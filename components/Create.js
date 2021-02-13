import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
    return (
        <>
            
            <Form>
                <Accordion defaultActiveKey="0">
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
                                    <Form.Control type="text" placeholder="Preencha com seu usuário" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Data</Form.Label>
                                    <Form.Control type="date" placeholder="Preencha com sua senha" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Ocupação</Form.Label>
                                    <Form.Control type="text" placeholder="Preencha com seu usuário" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Idade</Form.Label>
                                    <Form.Control type="text" placeholder="Preencha com seu usuário" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="number" placeholder="Preencha com seu usuário" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Sexo</Form.Label>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="radio" id="masculino" name="sexo" label="Masculino" />
                                    
                                        <Form.Check type="radio" id="feminino" name="sexo" label="Feminino" />
                                    </Form.Group>
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
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
                                        <Form.Check type="radio" id="sim" name="uso_de_oculos" label="Sim" />
                                    
                                        <Form.Check type="radio" id="nao" name="uso_de_oculos" label="Não" />
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Motivo da consulta</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Antecedentes pessoais</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
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
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Observações</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </>
            
    )
}

export default Create
