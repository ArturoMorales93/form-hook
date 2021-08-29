import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormRadio = ({ label, name, setHasChildren, control, myRef }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <Form.Group as={Col}>
                <Form.Label>{label}</Form.Label>
                <div className="radios-container" {...field}>
                    <Form.Check ref={myRef[0]} inline name={name} type="radio" label="Si" id="chkSi" value="Si" onClick={() => setHasChildren(true)} />
                    <Form.Check ref={myRef[1]} inline name={name} type="radio" label="No" id="chkNo" value="No" onClick={() => setHasChildren(false)} />
                </div>
            </Form.Group>
        )}
    />
)

export default FormRadio