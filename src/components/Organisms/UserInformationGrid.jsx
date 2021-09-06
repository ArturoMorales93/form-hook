import { useContext } from "react"
import { Table } from "react-bootstrap"
import UserContext from "../Context/UserContext"

const UserInformationGrid = () => {
    const [state] = useContext(UserContext)

    return (
        <Table borderless responsive size="sm">
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>{state.name}</td>
                </tr>
                <tr>
                    <td>Cédula</td>
                    <td>{state.id}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>{state.email}</td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td>{state.phone}</td>
                </tr>
                <tr>
                    <td>Edad</td>
                    <td>{state.age}</td>
                </tr>
                <tr>
                    <td>Provincia</td>
                    <td>{state.provincia}</td>
                </tr>
                <tr>
                    <td>Cantón</td>
                    <td>{state.canton}</td>
                </tr>
                <tr>
                    <td>Hijos</td>
                    <td>{state.children}</td>
                </tr>
                <tr>
                    <td>Cantidad</td>
                    <td>{state.numChildren}</td>
                </tr>
                <tr>
                    <td>Contraseña</td>
                    <td>{state.password1}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default UserInformationGrid
