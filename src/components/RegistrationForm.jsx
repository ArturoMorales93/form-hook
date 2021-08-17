import React, { useEffect, useState } from "react"
import { Container, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import useDateValidator from "./CustomHooks/useDateValidator";

const RegistrationForm = () => {

    const requerido = false
    const [tieneHijos, setTieneHijos] = useState(false)
    const [contrasenia1, setContrasenia1] = useState("")
    const [contrasenia2, setContrasenia2] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        setContrasenia1(document.getElementById("contrasenia1"))
        setContrasenia2(document.getElementById("contrasenia2"))
    }, [contrasenia1, contrasenia2])

    const onSubmit = (data, { target }) => {
        console.log(data)
        // target.submit()
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
                                        value: requerido,
                                        message: "Campo requerido",
                                    },
                                    pattern: {
                                        value: /^[A-Za-záéíóúñ ]+$/,
                                        message: "El nombre solo puede contener letras"
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
                                        value: requerido,
                                        message: "Campo requerido"
                                    },
                                    pattern: {
                                        value: /^[1-9][0-9]{8}$/,
                                        message: "La cédula solo puede contener 9 dígitos"
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
                            <Form.Control
                                placeholder="Escriba su correo"
                                {...register(
                                    "correo", {
                                    required: {
                                        value: requerido,
                                        message: "Campo requerido"
                                    },
                                    pattern: {
                                        value: /utn.ac.cr$/,
                                        message: 'EL correo debe pertenecer al dominio "utn.ac.cr"'
                                    },
                                    validate: {
                                        // contieneArroba: v => v.includes("@") || 'Formato invalido de correo, no contiene "@"',
                                        // contieneUsuario: v => v[0] !== "@" || "Por favor ingrese un usuario a la dirección"
                                    }
                                }
                                )}
                            />
                            {
                                errors.correo &&
                                <Form.Text className="form-alert">
                                    {errors.correo.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                placeholder="Escriba su teléfono"
                                {...register(
                                    "telefono", {
                                    pattern: {
                                        value: /^[1-9][0-9]{7}$/,
                                        message: "El teléono solo puede contener 8 dígitos"
                                    }
                                }
                                )}
                            />
                            {
                                errors.telefono &&
                                <Form.Text className="form-alert">
                                    {errors.telefono.message}
                                </Form.Text>
                            }
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group md={6} as={Col}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                {...register(
                                    "fecha", {
                                    required: {
                                        value: requerido,
                                        message: "Campo requerido"
                                    },
                                    // validate: useDateValidator,
                                }
                                )}
                            />
                            {
                                errors.fecha &&
                                <Form.Text className="form-alert">
                                    {errors.fecha.message}
                                </Form.Text>
                            }
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
                                <Form.Check inline id="chkSi" type="radio" label="Si" value="Si"
                                    {...register("hijos")}
                                    onChange={() => setTieneHijos(true)}
                                />
                                <Form.Check inline id="chkNo" type="radio" label="No" value="No"
                                    {...register("hijos")}
                                    onChange={() => setTieneHijos(false)}
                                />
                            </div>
                        </Form.Group>

                        <Form.Group as={Col}>
                            {
                                tieneHijos ?
                                    <div>
                                        <Form.Label>Cantidad</Form.Label>
                                        <Form.Control
                                            type="number" placeholder="Escriba la cantidad" // Debe validarse que se reinicie en el unmount
                                            {...register(
                                                "cantidad", {
                                                min: {
                                                    value: 1,
                                                    message: "La cantidad mínima es 1"
                                                },
                                                valueAsNumber: {
                                                    value: true
                                                }
                                            }
                                            )}
                                        />
                                        {
                                            errors.cantidad &&
                                            <Form.Text className="form-alert" >
                                                {errors.cantidad.message}
                                            </Form.Text>
                                        }
                                    </div> :
                                    <div></div>
                            }
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="text" placeholder="Escriba su contraseña" id="contrasenia1"
                                {...register(
                                    "contrasenia1", {
                                    // pattern: {
                                    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    //     message: "La contraseña debe contener mayúsculas, minúsculas, números, símbolos y tener una longitud de 8 caracteres"
                                    // }
                                }
                                )}
                            />
                            {
                                errors.contrasenia1 &&
                                <Form.Text className="form-alert" >
                                    {errors.contrasenia1.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Confirme su contraseña</Form.Label>
                            <Form.Control
                                type="text" placeholder="Escriba su contraseña" id="contrasenia2"
                                {...register(
                                    "contrasenia2", {
                                        validate: v => v === contrasenia1.value || "Contraseñas deben ser iguales" // Esto debe estar en un archivo a parte
                                    }
                                )}
                            />
                            {
                                errors.contrasenia2 &&
                                <Form.Text className="form-alert" >
                                    {errors.contrasenia2.message}
                                </Form.Text>
                            }
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