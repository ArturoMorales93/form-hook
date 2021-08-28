import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormInput = ({ md, label, name, register, validations, type, placeholder, errors, control, myRef }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <Form.Group md={md} as={Col}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    ref={myRef}
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
        )}
    />
)

export default FormInput