import React, { useState, useRef } from "react"
import { Container, Form, Col, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import FormInput from "../inputComponents/FormInput.jsx"
import FormSelect from "../inputComponents/FormSelect.jsx"
import FormRadio from "../inputComponents/FormRadio.jsx"
import useCantones from "../CustomHooks/useCantones"
// import {checkMinAge, checkMaxAge} from "../CustomHooks/useDateValidator";

const RegistrationForm = () => {

    const IS_REQUIRED = false
    const SELECT_DEFAULT_OPTION = "Elija una opción"


    // React Hook Form
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm();


    // References
    const provinciaRef = useRef(null)
    const password1Ref = useRef(null)


    // States
    const [hasChildren, setHasChildren] = useState(false)
    const [selectedProvincia, setSelectedProvincia] = useState(0)


    // Form submit
    const onSubmit = (data, { target }) => {
        console.log(data)
        // console.log(password1Ref)
        // target.submit()
    }

    return (
        <Container>
            <h2 className="font-weight-bold">Datos personales</h2>
            <Form action="/codigo" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <FormInput
                        label="Nombre completo" name="name" placeholder="Escriba su nombre"
                        register={register} errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido",
                            },
                            pattern: {
                                value: /^[A-Za-záéíóúñ ]+$/,
                                message: "El nombre solo puede contener letras"
                            }
                        }}
                    />

                    <FormInput
                        label="Cédula" name="id" placeholder="Escriba su cédula"
                        register={register} errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
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
                        label="Correo electrónico" name="email" placeholder="Escriba su correo"
                        register={register} errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            validate: {
                                // hasUser: v => v[0] !== "@" || "Por favor ingrese un usuario a la dirección",
                                // hasAt: v => v.includes("@") || 'Formato invalido de correo, no contiene "@"',
                                // hasDomain: v => v.slice(-9) === "utn.ac.cr" || 'EL correo debe pertenecer al dominio "utn.ac.cr"'
                            }
                        }}
                    />

                    <FormInput
                        label="Teléfono" name="phone" placeholder="Escriba su teléfono"
                        register={register} errors={errors} control={control}
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
                        md={6} label="Fecha de nacimiento" name="birthday" type="date"
                        register={register} errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            pattern: {
                                value: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
                                message: "Formato de fecha no permitido"
                            },
                            validate: {
                                // hasMinAge: checkMinAge,
                                // hasMaxYear: checkMaxAge
                            }
                        }}
                    />
                </Form.Row>

                <Form.Row>
                    <FormSelect
                        label="Provincia" name="provincia" myRef={provinciaRef}
                        errors={errors} control={control}
                        options={[
                            "San José",
                            "Alajuela",
                            "Cartago",
                            "Heredia",
                            "Guanacaste",
                            "Puntarenas",
                            "Limón"
                        ]}
                        defaultOption={SELECT_DEFAULT_OPTION}
                        onChange={() => {
                            setSelectedProvincia(provinciaRef.current.selectedIndex)
                            setValue("canton", SELECT_DEFAULT_OPTION)
                        }}
                    />

                    <FormSelect
                        label="Cantón" name="canton"
                        errors={errors} control={control}
                        options={useCantones(selectedProvincia)}
                        defaultOption={SELECT_DEFAULT_OPTION}
                    />
                </Form.Row>

                <Form.Row>
                    <FormRadio
                        label="Hijos" name="children" defaultValue="No"
                        setHasChildren={setHasChildren} control={control}
                    />

                    {
                        hasChildren &&
                        <FormInput
                            label="Cantidad" name="numChildren" placeholder="Escriba la cantidad"
                            type="number" register={register} errors={errors} control={control}
                            validations={{
                                min: {
                                    value: 1,
                                    message: "La cantidad mínima es 1"
                                },
                                max: {
                                    value: 99,
                                    message: "La cantidad máxima es 99"
                                },
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Dígite solo números"
                                },
                                shouldUnregister: {
                                    value: true
                                }
                            }}
                        />
                    }
                </Form.Row>

                <Form.Row>
                    <FormInput
                        label="Contraseña" name="password1" placeholder="Escriba su contraseña"
                        type="text" register={register} errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            // pattern: {
                            //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            //     message: "La contraseña debe contener mayúsculas, minúsculas, números, símbolos y tener una longitud de 8 caracteres"
                            // }
                        }}
                        myRef={password1Ref}
                    />

                    <Form.Group as={Col}>
                        <Form.Label>Confirme su contraseña</Form.Label>
                        <Form.Control
                            type="text" placeholder="Escriba su contraseña"
                            {...register(
                                "contrasenia2", {
                                // validate: v => v === contrasenia1.current.value || "Contraseñas deben ser iguales" // Esto debe estar en un archivo a parte
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