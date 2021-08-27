import React from "react"
import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormSelect = ({ md, label, name, myRef, options, errors, control, onChange=null }) => {

    const defaultOption = "Elija una opción"

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: {
                    value: true,
                    message: "Campo requerido"
                },
                validate: v => v !== defaultOption || "Debe elegir una opción"
            }}
            render={({ field }) => (
                <Form.Group md={md} as={Col}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                        {...field}
                        ref={myRef}
                        as="select"
                        onChange={(e) => {
                            if (onChange !== null) {
                                onChange()
                            }
                            field.onChange(e.target.value)
                        }}
                    >
                        <option>{defaultOption}</option>
                        {options.map(opt => (
                            <option key={opt}>{opt}</option>
                        ))}
                    </Form.Control>
                    {
                        errors[name] &&
                        <Form.Text className="form-alert font-weight-bold">
                            {errors[name].message}
                        </Form.Text>
                    }
                </Form.Group>
            )}
        />
    )
}

export default FormSelect