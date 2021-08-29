import React, { useState, useRef } from "react"
import { Container, Form, Button, ButtonGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"
import FormInput from "../inputComponents/FormInput.jsx"
import FormSelect from "../inputComponents/FormSelect.jsx"
import FormRadio from "../inputComponents/FormRadio.jsx"
import useCantones from "../CustomHooks/useCantones"
import { checkMinAge, checkMaxAge } from "../CustomHooks/useDateValidator";

const RegistrationForm = () => {

    // ========== Global variables ========== //
    const IS_REQUIRED = true
    const SELECT_DEFAULT_OPTION = "Elija una opción"


    // ========== React Hook Form ========== //
    const { handleSubmit, reset, setValue, control, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            id: "",
            email: "",
            phone: "",
            birthday: "",
            provincia: SELECT_DEFAULT_OPTION,
            canton: SELECT_DEFAULT_OPTION,
            children: "No",
            numChildren: "",
            password1: "",
            password2: ""
        },
    })


    // ========== References ========== //
    const chkSiRef = useRef(null)
    const chkNoRef = useRef(null)
    const provinciaRef = useRef(null)
    const password1Ref = useRef(null)


    // ========== States ========== //
    const [selectedProvincia, setSelectedProvincia] = useState(0)
    const [hasChildren, setHasChildren] = useState(false)


    // ========== Form submit ========== //
    const onSubmit = (data, { target }) => {
        console.log(data)
        target.submit()
    }

    return (
        <Container>
            <h2 className="font-weight-bold">Datos personales</h2>
            <Form action="/codigo" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <FormInput
                        md={6} label="Nombre completo" name="name" placeholder="Escriba su nombre"
                        errors={errors} control={control}
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
                        md={6} label="Cédula" name="id" placeholder="Escriba su cédula"
                        errors={errors} control={control}
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
                        md={6} label="Correo electrónico" name="email" placeholder="Escriba su correo"
                        errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            validate: {
                                hasUser: v => v[0] !== "@" || "Por favor ingrese un usuario a la dirección",
                                hasAt: v => v.includes("@") || 'Formato invalido de correo, no contiene "@"',
                                hasDomain: v => v.slice(-9) === "utn.ac.cr" || 'EL correo debe pertenecer al dominio "utn.ac.cr"'
                            }
                        }}
                    />

                    <FormInput
                        md={6} label="Teléfono" name="phone" placeholder="Escriba su teléfono"
                        errors={errors} control={control}
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
                        errors={errors} control={control}
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
                                hasMinAge: checkMinAge,
                                hasMaxYear: checkMaxAge
                            }
                        }}
                    />
                </Form.Row>

                <Form.Row>
                    <FormSelect
                        md={6} label="Provincia" name="provincia" myRef={provinciaRef}
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
                        md={6} label="Cantón" name="canton"
                        errors={errors} control={control}
                        options={useCantones(selectedProvincia)}
                        defaultOption={SELECT_DEFAULT_OPTION}
                    />
                </Form.Row>

                <Form.Row>
                    <FormRadio
                        md={6} label="Hijos" name="children"
                        setHasChildren={setHasChildren} control={control} myRef={[chkSiRef, chkNoRef]}
                    />

                    {
                        hasChildren &&
                        <FormInput
                            md={6} label="Cantidad" name="numChildren" placeholder="Escriba la cantidad"
                            type="number" errors={errors} control={control}
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
                                }
                            }}
                        />
                    }
                </Form.Row>

                <Form.Row>
                    <FormInput
                        md={6} label="Contraseña" name="password1" placeholder="Escriba su contraseña"
                        type="password" errors={errors} control={control}
                        myRef={password1Ref}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$&*!%?]{8,}$/,
                                message: "La contraseña debe contener mayúsculas, minúsculas, números, símbolos (@#$&*) y tener una longitud de al menos 8 caracteres"
                            }
                        }}
                    />

                    <FormInput
                        md={6} label="Confirme su contraseña" name="password2" placeholder="Escriba su contraseña"
                        type="password" errors={errors} control={control}
                        validations={{
                            required: {
                                value: IS_REQUIRED,
                                message: "Campo requerido"
                            },
                            validate: v => v === password1Ref.current.value || "Las contraseñas son diferentes"
                        }}
                    />
                </Form.Row>

                <ButtonGroup className="button-group">
                    <Button variant="dark" type="submit">
                        Enviar
                    </Button>
                    <Button variant="outline-dark" type="button"
                        onClick={() => {
                            setHasChildren(false)
                            chkSiRef.current.checked = false
                            chkNoRef.current.checked = false
                            reset()
                        }}>
                        Limpiar campos
                    </Button>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default RegistrationForm