import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import UserContext from "../Context/UserContext"
import ButtonGroup from "../Molecules/ButtonGroup"
import useCantones from "../CustomHooks/useCantones"
import { SET_USER_INFORMATION } from "../Context/actions"
import React, { useState, useRef, useContext } from "react"
import FormRadio from "../Molecules/inputComponents/FormRadio.jsx"
import FormInput from "../Molecules/inputComponents/FormInput.jsx"
import FormSelect from "../Molecules/inputComponents/FormSelect.jsx"
import { checkMinAge, checkMaxAge, calculateAge } from "../CustomHooks/useDateValidator"

const RegistrationForm = () => {
    // ========== Global variables ========== //
    const IS_REQUIRED = true
    const SELECT_DEFAULT_OPTION = "Elija una opción"
    const CHILDREN_DEFAULT_OPTION = "No especificó"


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
            children: CHILDREN_DEFAULT_OPTION,
            numChildren: "",
            password1: "",
            password2: ""
        },
    })


    // ========== References/Hooks ========== //
    const chkSiRef = useRef(null)
    const chkNoRef = useRef(null)
    const provinciaRef = useRef(null)
    const password1Ref = useRef(null)
    const history = useHistory()


    // ========== Global states ========== //
    const [, dispatch] = useContext(UserContext)


    // ========== Local states ========== //
    const [selectedProvincia, setSelectedProvincia] = useState(0)
    const [hasChildren, setHasChildren] = useState(false)


    // ========== Form submit ========== //
    const onSubmit = data => {
        if (data.birthday !== "") {
            data.age = calculateAge(data.birthday)
        }

        if (data.children === "Si" & data.numChildren === "") {
            data.numChildren = CHILDREN_DEFAULT_OPTION
        }

        dispatch({
            type: SET_USER_INFORMATION,
            data
        })
        history.push("/codigo")
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <p>Los campos con un asterisco son requeridos.</p>
                <Form.Row>
                    <FormInput
                        md={6} label="Nombre completo" name="name"
                        placeholder="Escriba su nombre"
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
                        md={6} label="Cédula" name="id"
                        placeholder="Escriba su cédula"
                        helpText="No ingrese guiones"
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
                        md={6} label="Correo electrónico" name="email"
                        placeholder="Escriba su correo"
                        helpText="Debe pertenecer al dominio utn.ac.cr"
                        type={"email"} errors={errors} control={control}
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
                        md={6} label="Teléfono" name="phone"
                        placeholder="Escriba su teléfono"
                        helpText="No ingrese guiones"
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
                        md={6} label="Fecha de nacimiento" name="birthday"
                        helpText="Debe tener mínimo 12 años"
                        type="date" errors={errors} control={control}
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
                            md={6} label="Cantidad" name="numChildren"
                            placeholder="Escriba la cantidad"
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

                <Form.Text className="form__help-text">
                    La contraseña debe contener mayúsculas, minúsculas, números, símbolos (@#$&*) y tener una longitud de al menos 8 caracteres
                </Form.Text>

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
                                message: "La contraseña no cumple los requisitos"
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

                <ButtonGroup>
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
        </>
    )
}

export default RegistrationForm
