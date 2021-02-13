import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="email" placeholder="Preencha com seu usuário" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Preencha com sua senha" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </Form>
        
    )
}

export default Login
