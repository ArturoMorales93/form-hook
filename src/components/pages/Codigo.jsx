import { Container } from "react-bootstrap"

const Codigo = () => {
    var url = window.location.href
    var params = (new URL(url)).searchParams

    const values = [
        params.get("name"),
        params.get("id"),
        params.get("email"),
        params.get("phone"),
        params.get("birthday"),
        params.get("provincia"),
        params.get("canton"),
        params.get("children"),
        params.get("numChildren"),
        params.get("password1"),
        params.get("password2"),
    ]

    return (
        <Container>
            <h1>Datos personales</h1>
            <div className="response-grid">
                <div>
                    <p>Nombre</p>
                    <p>Cédula</p>
                    <p>Correo</p>
                    <p>Teléfono</p>
                    <p>Fecha de nacimiento</p>
                    <p>Provincia</p>
                    <p>Cantón</p>
                    <p>Hijos</p>
                    <p>Cantidad</p>
                    <p>Contraseña</p>
                </div>
                <div>
                    {
                        values.map((value, i) => (
                            i === values.length - 1 ?
                                null :
                                value === "" || value === null ?
                                    <p key={i}>-</p> :
                                    <p key={i}>{value}</p>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Codigo