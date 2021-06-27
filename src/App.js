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
  const [isCreated, setIsCreated] = useState(false);
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
          <InitialPage setIsLogged={setIsLogged} nome={nome} />
        </Route>
        <Route path="/cadastro">
          {isCreated ? (
            <Redirect to="/" />
          ) : (
            <CadastroPage setIsCreated={setIsCreated} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
