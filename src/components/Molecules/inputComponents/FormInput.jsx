import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormInput = ({ md, label, name, validations, errors, type, placeholder, helpText, control, myRef }) => (
    <Controller
        name={name}
        control={control}
        rules={validations}
        render={({ field }) => (
            <Form.Group controlId={name} md={md} as={Col}>
                {
                    validations.required ?
                        <Form.Label>{label} *</Form.Label> :
                        <Form.Label>{label}</Form.Label>
                }
                {
                    helpText ?
                        <Form.Control
                            {...field}
                            ref={myRef}
                            type={type}
                            placeholder={placeholder}
                            aria-describedby={`${name}HelpBlock`}
                        />
                        :
                        <Form.Control
                            {...field}
                            ref={myRef}
                            type={type}
                            placeholder={placeholder}
                        />
                }
                {
                    helpText &&
                    <Form.Text id={`${name}HelpBlock`} className="form__help-text">
                        {helpText}
                    </Form.Text>
                }
                {
                    errors[name] &&
                    <Form.Text className="form__alert-text" >
                        {errors[name].message}
                    </Form.Text>
                }
            </Form.Group>
        )}
    />
)

export default FormInput
