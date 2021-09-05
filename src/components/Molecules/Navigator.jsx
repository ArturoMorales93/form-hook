import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigator = ({ path }) => (
    <Breadcrumb>
        {
            path.map((p, i) => (
                i === path.length - 1 ?
                    <li key={i} className="breadcrumb-item active">{p.page}</li> :
                    <li key={i} className="breadcrumb-item"><Link to={p.url}>{p.page}</Link></li>
            ))
        }
    </Breadcrumb>
)

export default Navigator
