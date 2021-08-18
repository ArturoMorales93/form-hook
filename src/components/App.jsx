import '../styles/styles.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegistrationForm from './pages/RegistrationForm';
import Codigo from './pages/Codigo';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={RegistrationForm} />
      <Route path="/codigo" component={Codigo} />
    </Switch>
  </Router>
)

export default App;
