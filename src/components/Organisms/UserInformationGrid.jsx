import { Table } from "react-bootstrap"

const UserInformationGrid = () => {
    var url = window.location.href
    var params = (new URL(url)).searchParams

    const user = {
        name: params.get("name"),
        id: params.get("id"),
        email: params.get("email"),
        phone: params.get("phone"),
        birthday: params.get("birthday"),
        provincia: params.get("provincia"),
        canton: params.get("canton"),
        children: params.get("children"),
        numChildren: params.get("numChildren"),
        password: params.get("password1"),
    }

    return (
        <Table borderless responsive size="sm">
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Cédula</td>
                    <td>{user.id}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td>Edad</td>
                    <td>{user.birthday}</td>
                </tr>
                <tr>
                    <td>Provincia</td>
                    <td>{user.provincia}</td>
                </tr>
                <tr>
                    <td>Cantón</td>
                    <td>{user.canton}</td>
                </tr>
                <tr>
                    <td>Hijos</td>
                    <td>{user.children}</td>
                </tr>
                <tr>
                    <td>Cantidad</td>
                    <td>{user.numChildren}</td>
                </tr>
                <tr>
                    <td>Contraseña</td>
                    <td>{user.password}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default UserInformationGrid