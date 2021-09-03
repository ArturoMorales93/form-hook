import '../styles/styles.scss'
import { CODE_PAGE, HOME_PAGE, REGISTRATION_FORM_PAGE, REQUIREMENTS_PAGE } from '../routes/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegistrationForm from './pages/RegistrationForm'
import Requerimientos from './pages/Requerimientos'
import Codigo from './pages/Codigo'
import Home from './pages/Home'

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME_PAGE.url} exact component={Home} />
      <Route path={REQUIREMENTS_PAGE.url} component={Requerimientos} />
      <Route path={REGISTRATION_FORM_PAGE.url} component={RegistrationForm} />
      <Route path={CODE_PAGE.url} component={Codigo} />
    </Switch>
  </Router>
)

export default App;
