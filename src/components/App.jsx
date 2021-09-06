import '../styles/styles.scss'
import Home from './Pages/Home'
import Codigo from './Pages/Codigo'
import Formulario from './Pages/Formulario'
import Requerimientos from './Pages/Requerimientos'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HOME_PAGE, REQUERIMIENTOS_PAGE, FORMULARIO_PAGE, CODIGO_PAGE } from '../routes/routes'
import UserProvider from './Context/UserProvider'

const App = () => (
    <UserProvider>
        <Router>
            <Switch>
                <Route path={HOME_PAGE.url} exact component={Home} />
                <Route path={REQUERIMIENTOS_PAGE.url} component={Requerimientos} />
                <Route path={FORMULARIO_PAGE.url} component={Formulario} />
                <Route path={CODIGO_PAGE.url} component={Codigo} />
            </Switch>
        </Router>
    </UserProvider>
)

export default App;
