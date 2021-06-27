import { useState } from "react";
import GlobalStyle from "./theme/globalStyles";
import InitialPage from "./Pages/InitialPage";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CadastroPage from "./Pages/CadastroPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [nome, setNome] = useState("");

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          {isLogged ? (
            <Redirect to="initial" />
          ) : (
            <LoginPage
              nome={nome}
              isLogged={isLogged}
              setNome={setNome}
              setIsLogged={setIsLogged}
            />
          )}
        </Route>
        <Route path="/initial">
          <InitialPage nome={nome} />
        </Route>
        <Route path="/cadastro">
          <CadastroPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
