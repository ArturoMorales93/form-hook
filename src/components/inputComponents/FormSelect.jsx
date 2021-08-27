import React from "react"
import { Form, Col } from "react-bootstrap"

const FormSelect = ({ md, label, name, myRef = false, register, errors, clearErrors, setError, defaultOption, options, errorMessage, onChange }) => {
    
    // Funcionalidad para registrar el ref
    const { ref, ...rest } = register(
        name,
        {
            required: {
                value: true,
                message: "Campo requerido"
            },
            // validate: v => v !== defaultOption || errorMessage
        }
    )

    // Método usado por ambos casos (con y sin ref) para mostrar las opciones del select
    const mostrarOpciones = () => (
        <>
            <option>{defaultOption}</option>
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </>
    )

    return (
        <Form.Group md={md} as={Col}>
            <Form.Label>{label}</Form.Label>
            {
                !myRef ?
                    <Form.Control
                        as="select"
                        {...register(name, {
                            require: {
                                value: true,
                                message: "Requerdo"
                            },
                            // validate: v => v !== defaultOption || errorMessage
                        })}
                    >
                        {mostrarOpciones()}
                    </Form.Control>
                    :
                    <Form.Control
                        as="select"
                        {...rest}
                        name={name}
                        ref={e => {
                            ref(e)
                            myRef.current = e
                        }}
                        onChange={() => {
                            if (myRef.current.selectedIndex !== 0) {
                                clearErrors(name)
                            } else {
                                setError(name, {
                                    type: "manual",
                                    message: errorMessage
                                })
                            }
                            onChange()
                        }}
                    >
                        {mostrarOpciones()}
                    </Form.Control>
            }
            {
                errors[name] &&
                <Form.Text className="form-alert font-weight-bold">
                    {errors[name].message}
                </Form.Text>
            }
        </Form.Group>
    )
}

export default FormSelect