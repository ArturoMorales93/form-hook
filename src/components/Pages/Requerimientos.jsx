import PageBody from "../Templates/PageBody"
import RequirementsList from "../Organisms/RequirementsList"
import { HOME_PAGE, REQUERIMIENTOS_PAGE } from "../../routes/routes"

const Requerimientos = () => (
    <PageBody
        path={[HOME_PAGE, REQUERIMIENTOS_PAGE]}
        title="Requerimientos"
        body={
            <>
                <p>Cree un nuevo proyecto (Sitio Web) en el cual implemente lo que se le solicita a continuación:</p>
                <RequirementsList />
            </>
        }
    />
)

export default Requerimientos
