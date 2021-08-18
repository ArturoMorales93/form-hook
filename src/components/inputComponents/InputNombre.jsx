import { Form, Col } from "react-bootstrap"

const InputNombre = ({ register, errors, requerido }) => (
    <Form.Group as={Col}>
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
            {...register(
                "nombre", {
                required: {
                    value: requerido,
                    message: "Campo requerido",
                },
                pattern: {
                    value: /^[A-Za-záéíóúñ ]+$/,
                    message: "El nombre solo puede contener letras"
                }
            }
            )}
            placeholder="Escriba su nombre"
        />
        {
            errors.nombre &&
            <Form.Text className="form-alert" >
                {errors.nombre.message}
            </Form.Text>
        }
    </Form.Group>
)

export default InputNombre