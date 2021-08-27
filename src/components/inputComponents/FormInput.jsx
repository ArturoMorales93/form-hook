import { Form, Col } from "react-bootstrap"

const FormInput = ({ md, label, name, register, validations, type, placeholder, errors }) => (
    <Form.Group md={md} as={Col}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            {...register(name, validations)}
            type={type}
            placeholder={placeholder}
        />
        {
            errors[name] &&
            <Form.Text className="form-alert font-weight-bold" >
                {errors[name].message}
            </Form.Text>
        }
    </Form.Group>
)

export default FormInput