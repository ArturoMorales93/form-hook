import React, { useState, useRef, createRef } from "react"
import { Container, Form, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInput from "../inputComponents/FormInput.jsx";
import FormSelect from "../inputComponents/FormSelect.jsx";
import useCantones from "../CustomHooks/useCantones";
// import useDateValidator from "../CustomHooks/useDateValidator";

const contrasenia1 = createRef()
// const provincia = createRef()

const RegistrationForm = () => {
    const requerido = false
    const cantonRef = useRef(null)
    const provinciaRef = useRef(null)

    // Incorporación de React Hook Form
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

    // Estados
    const [tieneHijos, setTieneHijos] = useState(false)
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(0)

    //Submit del formulario
    const onSubmit = (data, { target }) => {
        console.log(data)
        // target.submit()
    }

    return (
        <Container>
            <h2 className="font-weight-bold">Datos personales</h2>
            <Form action="/codigo" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <FormInput
                        label="Nombre completo" name="nombre" placehorder="Escriba su nombre"
                        register={register} errors={errors}
                        validations={{
                            required: {
                                value: requerido,
                                message: "Campo requerido",
                            },
                            pattern: {
                                value: /^[A-Za-záéíóúñ ]+$/,
                                message: "El nombre solo puede contener letras"
                            }
                        }}
                    />

                    <FormInput
                        label="Cédula" name="cedula" placehorder="Escriba su cédula"
                        register={register} errors={errors}
                        validations={{
                            required: {
                                value: requerido,
                                message: "Campo requerido"
                            },
                            pattern: {
                                value: /^[1-9][0-9]{8}$/,
                                message: "La cédula solo puede tener 9 dígitos y no puede iniciar con 0."
                            }
                        }}
                    />
                </Form.Row>

                <Form.Row>
                    <FormInput
                        label="Correo electrónico" name="correo" placehorder="Escriba su correo"
                        register={register} errors={errors}
                        validations={{
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
                        }}
                    />

                    <FormInput
                        label="Teléfono" name="telefono" placehorder="Escriba su teléfono"
                        register={register} errors={errors}
                        validations={{
                            pattern: {
                                value: /^[1-9][0-9]{7}$/,
                                message: "El teléono solo puede tener 8 dígitos y no puede iniciar con 0."
                            }
                        }}
                    />
                </Form.Row>

                <Form.Row>
                    <FormInput
                        md={6} label="Fecha de nacimiento" name="fecha" type="date"
                        register={register} errors={errors}
                        validations={{
                            required: {
                                value: requerido,
                                message: "Campo requerido"
                            },
                            // validate: useDateValidator,
                        }}
                    />
                </Form.Row>

                <Form.Row>
                    <FormSelect
                        label="Provincia" name="provincia" myRef={provinciaRef}
                        register={register} errors={errors} clearErrors={clearErrors} setError={setError}
                        defaultOption="Elija una opción" errorMessage="Debe elegir una opción"
                        options={[
                            "San José",
                            "Alajuela",
                            "Cartago",
                            "Heredia",
                            "Guanacaste",
                            "Puntarenas",
                            "Limón"
                        ]}
                        onChange={() => {
                            setProvinciaSeleccionada(provinciaRef.current.selectedIndex)
                            console.log(cantonRef.current)
                        }}
                    />

                    <FormSelect
                        label="Cantón" name="canton" myRef={cantonRef}
                        register={register} errors={errors} clearErrors={clearErrors} setError={setError}
                        defaultOption="Elija una opción" errorMessage="Debe elegir una opción"
                        options={useCantones(provinciaSeleccionada)}
                    />
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
                                        type="number" placeholder="Escriba la cantidad"
                                        {...register(
                                            "cantidad", {
                                            min: {
                                                value: 1,
                                                message: "La cantidad mínima es 1"
                                            },
                                            valueAsNumber: {
                                                value: true
                                            },
                                            shouldUnregister: {
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
                            type="text" placeholder="Escriba su contraseña" name="contrasenia1"
                            {...register(
                                "contrasenia1", {
                                // pattern: {
                                //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                //     message: "La contraseña debe contener mayúsculas, minúsculas, números, símbolos y tener una longitud de 8 caracteres"
                                // }
                            }
                            )}
                            ref={contrasenia1}
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
                            type="text" placeholder="Escriba su contraseña"
                            {...register(
                                "contrasenia2", {
                                validate: v => v === contrasenia1.current.value || "Contraseñas deben ser iguales" // Esto debe estar en un archivo a parte
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

        </Container>
    )
}

export default RegistrationForm