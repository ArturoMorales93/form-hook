import "../styles/styles.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME_PAGE } from "../routes/routes";
import Home from "./Pages/Home";

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME_PAGE.url} exact component={Home} />
    </Switch>
  </Router>
)

export default App