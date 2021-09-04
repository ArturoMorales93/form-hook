import { HOME_PAGE, FORMULARIO_PAGE, CODIGO_PAGE } from "../../routes/routes"
import PageBody from "../Templates/PageBody"
import UserInformationGrid from "../Organisms/UserInformationGrid"

const Codigo = () => (
    <PageBody
        path={[HOME_PAGE, FORMULARIO_PAGE, CODIGO_PAGE]}
        title="Datos personales"
        body={
            <UserInformationGrid />
        }
    />
)

export default Codigo