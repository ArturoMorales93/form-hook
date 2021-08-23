import React from "react"
import { Form, Col } from "react-bootstrap"

const FormSelect = ({ md, label, name, myRef, register, errors, clearErrors, setError, defaultOption, options, errorMessage, onChange=() => null }) => {
    const { ref, ...rest } = register(
        name,
        {
            required: {
                value: true,
                message: "Campo requerido",
            },
            validate: v => v !== defaultOption || errorMessage
        }
    )

    return (
        <Form.Group md={md} as={Col}>
            <Form.Label>{label}</Form.Label>
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
                <option>{defaultOption}</option>
                {
                    options.map(opt => <option key={opt}>{opt}</option>)
                }
            </Form.Control>
            {
                errors[name] &&
                <Form.Text className="form-alert">
                    {errors[name].message}
                </Form.Text>
            }
        </Form.Group>
    )
}

export default FormSelect