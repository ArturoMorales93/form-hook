import PageBody from "../Templates/PageBody"
import { HOME_PAGE, REQUERIMIENTOS_PAGE } from "../../routes/routes"

const Requerimientos = () => (
    <PageBody
        path={[HOME_PAGE, REQUERIMIENTOS_PAGE]}
        title="Requerimientos"
        body={
            <>
                <p>Cree un nuevo proyecto (Sitio Web) en el cual implemente lo que se le solicita a continuación:</p>
                <ul>
                    <li>Utilice un framework y sus componentes para el desarrollo de las diferentes páginas.</li>
                    <li>Crear un formulario que permita al usuario ingresar información referente a datos personales.
                        La información solicitada es cédula, nombre, teléfono, correo, fecha de nacimiento, provincia, cantón,
                        si tiene hijos o no y la cantidad de hijos, contraseña, y confirmar contraseña. El formulario deberá enviar
                        la información mediante el método seguro y a una página llamada código.</li>
                    <li>Utilice los controles HTML más adecuados para cada tipo de datos.</li>
                    <li>
                        Implemente las validaciones de:
                        <ol>
                            <li>Los valores cédula, nombre, correo, fecha de nacimiento, provincia y cantón son obligatorios.</li>
                            <li>La cédula debe cumplir con el formato de cédula nacional (Costa Rica).</li>
                            <li>El teléfono debe cumplir con el formato telefónico de Costa Rica.</li>
                            <li>El correo solo debe permitir correos de tipo UTN (utn.ac.cr).</li>
                            <li>La fecha de nacimiento debe validar que el usuario tenga una edad mínima de 12 años.</li>
                            <li>Al seleccionar la provincia se deben mostrar los cantones disponibles según la provincia solicitada.</li>
                            <li>Solo se indicará (obligatoriamente) la cantidad de hijos en caso de que el usuario indique que tiene hijos, en caso contrario no será (ni se permite) necesario ingresar la cantidad de hijos. Además, no puede contener valores negativos.</li>
                            <li>Al enviar el formulario debe validar que los datos de las contraseñas cumplan con tener mínimo 8 caracteres, incluir mayúsculas y minúsculas, valores numéricos y algún carácter especial (“@#$&*”).</li>
                            <li>Realice una función JS que permita mostrar la información enviada por el usuario, esta información se mostrara en la página código.</li>
                            <li>Realice una función JS para validar que las contraseñas ingresadas sean iguales, la cual debe ser utilizada para validar dichos datos antes de enviar la información del formulario.</li>
                            <li>Realice una función JS que permita calcular la edad del usuario, la cual se debe mostrar al mostrar la información personal en el punto 9.</li>
                            <li>Las funciones JS deben encontrarse en un archivo externo.</li>
                        </ol>
                    </li>
                </ul>
            </>
        }
    />
)

export default Requerimientos