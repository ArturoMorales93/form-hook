import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import Navigator from "../Organisms/Navigator"
import { HOME_PAGE, REGISTRATION_FORM_PAGE, REQUIREMENTS_PAGE } from "../../routes/routes"

const Home = () => (
    <Container>
        <Navigator path={[HOME_PAGE]} />

        <h1>Indicaciones</h1>
        <p>
            Este es el proyecto final del curso Tecnologías y Sistemas Web I de la Universidad Técnica Nacional.
            El proyecto consite en crear un formulario web para registrar un usuario y validar la información ingresada en los campos.
        </p>
        <p>Por favor dirijase al formulario para ingresar sus datos personales.</p>

        <div className="button-group">
            <Link to={REGISTRATION_FORM_PAGE.url} className="btn btn-dark">
                Ir al formulario
            </Link>
            <Link to={REQUIREMENTS_PAGE.url} className="btn btn-outline-dark">
                Ver requerimientos
            </Link>
        </div>
    </Container>
)

export default Home