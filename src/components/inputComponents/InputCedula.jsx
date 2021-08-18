import { Form, Col } from "react-bootstrap"

const InputCedula = ({ register, errors, requerido }) => (
    <Form.Group as={Col}>
        <Form.Label>Cédula</Form.Label>
        <Form.Control
            placeholder="Escriba su cédula"
            {...register(
                "cedula", {
                required: {
                    value: requerido,
                    message: "Campo requerido"
                },
                pattern: {
                    value: /^[1-9][0-9]{8}$/,
                    message: "La cédula solo puede contener 9 dígitos"
                }
            }
            )}
        />
        {
            errors.cedula &&
            <Form.Text className="form-alert">
                {errors.cedula.message}
            </Form.Text>
        }
    </Form.Group>
)

export default InputCedula