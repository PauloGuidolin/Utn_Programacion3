import { Button, Form } from "react-bootstrap";
import styles from './Login.module.css';

export const Login = () => {
    return (
        <div className={styles.containerLogin}>
            <span className="material-symbols-outlined">
                group
            </span>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control name="user" type="text" placeholder="usuario" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" type="password" placeholder="contraseña" />
                </Form.Group>
                <Form.Check type="switch" label='mostrar contraseña' />
                <Button variant="primary">Enviar</Button>
            </Form>
        </div>
    );
}

