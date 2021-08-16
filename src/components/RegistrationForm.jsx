import { Container, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {

    const requerida = false
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, { target }) => {
        console.log(data, "data")
        target.submit()
    }

    return (
        <Container>
            <h2>Datos personales</h2>
            <div>
                <Form action="/codigo" method="GET" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                                placeholder="Escriba su nombre"
                                {...register(
                                    "nombre", {
                                    required: {
                                        value: requerida,
                                        message: "Campo requerido",
                                    },
                                    pattern: {
                                        value: /^[A-Za-záéíóúñ ]+$/,
                                        message: "Solo se permiten letras"
                                    }
                                }
                                )}
                            />
                            {
                                errors.nombre &&
                                <Form.Text className="form-alert" >
                                    {errors.nombre.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Cédula</Form.Label>
                            <Form.Control
                                placeholder="Escriba su cédula"
                                {...register(
                                    "cedula", {
                                    required: {
                                        value: requerida,
                                        message: "Campo requerido"
                                    },
                                    pattern: {
                                        value: /^[1-9][0-9]{8}$/,
                                        message: "Verifique el formato de la cédula"
                                    }
                                }
                                )}
                            />
                            {
                                errors.cedula &&
                                <Form.Text className="form-alert">
                                    {errors.cedula.message}
                                </Form.Text>
                            }
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control placeholder="Escriba su correo" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control placeholder="Escriba su teléfono" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group md={6} as={Col}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control as="select">
                                <option>Elija una opción</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Cantón</Form.Label>
                            <Form.Control as="select">
                                <option>Elija una opción</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Hijos</Form.Label> <br />
                            <div className="radios-container">
                                <Form.Check inline name="tieneHijos" id="chkSi" type="radio" label="Si" />
                                <Form.Check inline name="tieneHijos" id="chkNo" type="radio" label="No" />
                            </div>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control type="number" placeholder="Escriba la cantidad" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Escriba su contraseña" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Confirme su contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Escriba su contraseña" />
                        </Form.Group>
                        <Form.Text>

                        </Form.Text>
                    </Form.Row>

                    <Button variant="primary" type="submit" block>
                        Enviar
                    </Button>
                </Form>
            </div>

        </Container>
    )
}

export default RegistrationForm