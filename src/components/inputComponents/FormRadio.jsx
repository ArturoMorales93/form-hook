import React from "react"
import { Form, Col } from "react-bootstrap"
import { Controller } from "react-hook-form"

const FormRadio = ({ label, name, defaultValue, setTieneHijos, control }) => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
            <Form.Group as={Col}>
                <Form.Label>{label}</Form.Label> <br />
                <div className="radios-container" {...field}>
                    <Form.Check inline name={name} id="chkSi" type="radio" label="Si" value="Si" onChange={() => setTieneHijos(true)} />
                    <Form.Check inline name={name} id="chkNo" type="radio" label="No" value="No" onChange={() => setTieneHijos(false)} />
                </div>
            </Form.Group>
        )}
    />
)

export default FormRadio