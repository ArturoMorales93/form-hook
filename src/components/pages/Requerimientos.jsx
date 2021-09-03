import { Container } from "react-bootstrap"
import Navigator from "../Organisms/Navigator"
import { HOME_PAGE, REQUIREMENTS_PAGE } from "../../routes/routes"

const Requerimientos = () => (
    <Container>
        <Navigator path={[HOME_PAGE, REQUIREMENTS_PAGE]} />

        <h1>Requerimientos</h1>
    </Container>
)

export default Requerimientos