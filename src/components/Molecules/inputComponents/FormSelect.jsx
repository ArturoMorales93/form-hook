import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormSelect = ({ md, label, name, options, defaultOption, errors, control, myRef, onChange }) => (
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
                <Form.Label>{label} *</Form.Label>
                <Form.Control
                    {...field}
                    ref={myRef}
                    as="select"
                    onChange={e => {
                        if (onChange !== undefined) {
                            onChange()
                        }
                        field.onChange(e.target.value)
                    }}
                >
                    <option>{defaultOption}</option>
                    {options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                    ))}
                </Form.Control>
                {
                    errors[name] &&
                    <Form.Text className="form__alert-text">
                        {errors[name].message}
                    </Form.Text>
                }
            </Form.Group>
        )}
    />
)

export default FormSelect