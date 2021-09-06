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
                <h3>Nota</h3>
                <ul>
                    <li>No se está enviando la información por medio del metodo GET. En cambio, se está utilizando el estado global con Context API.</li>
                    <li>El punto 9 fue omitido. Se consumió la información directamente desde el estado global para mostrarla en la página código.</li>
                    <li>No sé hizo una función aparte para validar las contraseñas. Se validaron directamente con React Hook Form.</li>
                </ul>
            </>
        }
    />
)

export default Requerimientos
