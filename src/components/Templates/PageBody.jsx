import { Container } from "react-bootstrap"
import Navigator from "../Molecules/Navigator"

const PageBody = ({ path, title, subtitle, body }) => (
    <Container>
        <Navigator path={path} />
        {
            title &&
            <h1>{title}</h1>
        }
        {
            subtitle &&
            <h2>{subtitle}</h2>
        }
        {body}
    </Container>
)

export default PageBody