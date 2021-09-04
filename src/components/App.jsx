import '../styles/styles.scss'
import { HOME_PAGE, REQUERIMIENTOS_PAGE, FORMULARIO_PAGE, CODIGO_PAGE } from '../routes/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Requerimientos from './Pages/Requerimientos'
import RegistrationForm from './Pages/Formulario'
import Codigo from './Pages/Codigo'
import Home from './Pages/Home'

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME_PAGE.url} exact component={Home} />
      <Route path={REQUERIMIENTOS_PAGE.url} component={Requerimientos} />
      <Route path={FORMULARIO_PAGE.url} component={RegistrationForm} />
      <Route path={CODIGO_PAGE.url} component={Codigo} />
    </Switch>
  </Router>
)

export default App;
