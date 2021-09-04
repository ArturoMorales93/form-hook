import React from "react"
import PageBody from "../Templates/PageBody.jsx"
import RegistrationForm from "../Organisms/RegistrationForm.jsx"
import { HOME_PAGE, FORMULARIO_PAGE } from "../../routes/routes.js"

const Formulario = () => (
    <PageBody
        path={[HOME_PAGE, FORMULARIO_PAGE]}
        subtitle="Datos personales"
        body={
            <RegistrationForm />
        }
    />
)

export default Formulario