import Menu from "./Component/Menu";
import GlobalStyle from "./theme/globalStyles";
import InitialPage from "./Pages/InitialPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Menu />
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
