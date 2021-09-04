import { Row, Col } from "react-bootstrap"

const UserInformationGrid = () => {
    var url = window.location.href
    var params = (new URL(url)).searchParams

    const person = {
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
        <div className="response-grid">
            <Row>
                <Col>Nombre</Col>
                <Col>{person.name}</Col>
            </Row>
            <Row>
                <Col>Cédula</Col>
                <Col>{person.id}</Col>
            </Row>
            <Row>
                <Col>Correo</Col>
                <Col>{person.email}</Col>
            </Row>
            <Row>
                <Col>Teléfono</Col>
                <Col>{person.phone}</Col>
            </Row>
            <Row>
                <Col>Fecha nac.</Col>
                <Col>{person.birthday}</Col>
            </Row>
            <Row>
                <Col>Provincia</Col>
                <Col>{person.provincia}</Col>
            </Row>
            <Row>
                <Col>Cantón</Col>
                <Col>{person.canton}</Col>
            </Row>
            <Row>
                <Col>Hijos</Col>
                <Col>{person.children}</Col>
            </Row>
            <Row>
                <Col>Cantidad</Col>
                <Col>{person.numChildren}</Col>
            </Row>
            <Row>
                <Col>Contraseña</Col>
                <Col>{person.password}</Col>
            </Row>
        </div>
    )
}

export default UserInformationGrid