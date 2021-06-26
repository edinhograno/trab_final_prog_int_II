import GlobalStyle from "./theme/globalStyles";
import InitialPage from "./Pages/InitialPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CadastroPage from "./Pages/CadastroPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/initial">
          <InitialPage />
        </Route>
        <Route path="/cadastro">
          <CadastroPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
