import { Link } from "react-router-dom"
import PageBody from "../Templates/PageBody"
import ButtonGroup from "../Molecules/ButtonGroup"
import { HOME_PAGE, FORMULARIO_PAGE, REQUERIMIENTOS_PAGE } from "../../routes/routes"

const Home = () => (
    <>
        <PageBody
            path={[HOME_PAGE]}
            title="Indicaciones"
            body={
                <>
                    <p>
                        Esta es la parte práctica del examen final del curso Tecnologías y Sistemas Web I de la Universidad Técnica Nacional.
                        El examen consite en crear un formulario web para simular el registro de un usuario y validar la información ingresada.
                    </p>
                    <p>
                        Por favor dirijase al formulario para ingresar sus datos personales.
                    </p>

                    <ButtonGroup
                        components={
                            <>
                                <Link to={FORMULARIO_PAGE.url} className="btn btn-dark">
                                    Ir al formulario
                                </Link>
                                <Link to={REQUERIMIENTOS_PAGE.url} className="btn btn-outline-dark">
                                    Ver requerimientos
                                </Link>
                            </>
                        }
                    />
                </>
            }
        />
    </>
)

export default Home