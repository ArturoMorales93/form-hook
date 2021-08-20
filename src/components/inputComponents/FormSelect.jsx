import React from "react"
import { Form, Col } from "react-bootstrap"

const FormSelect = React.forwardRef(({ md, label, name, register, defaultOption, options, errors, errorMessage, onChange }, ref) => (
    <Form.Group md={md} as={Col}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            as="select" ref={ref}
            {...register(
                name, {
                // validate: v => v !== defaultOption || errorMessage
            }
            )}
            onChange={onChange}
            >
            <option>{defaultOption}</option>
            {
                options.map(opt => <option key={opt}>{opt}</option>)
            }
        </Form.Control>
        {
            errors.provincia &&
            <Form.Text className="form-alert">
                {errors.provincia.message}
            </Form.Text>
        }
    </Form.Group>
))

export default FormSelect