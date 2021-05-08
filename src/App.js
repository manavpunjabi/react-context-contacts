import logo from "./assets/images/logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";
import routes from "./routes";
import { useState } from "react";
import UserLeaveConfirmPrompt from "./components/UserLeaveConfirmPrompt";

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title || `My Contacts`;
  if (route.needsAuth && !isAuthenticated()) {
    history.push(`/auth/login`);
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    />
  );
};

const App = () => {
  const [confirmOpen, setConfirmOpen] = useState(true);
  return (
    <GlobalProvider>
      <Router
        getUserConfirmation={(message, callback) =>
          UserLeaveConfirmPrompt(message, callback, confirmOpen, setConfirmOpen)
        }
      >
        <Switch>
          {routes?.map((route, index) => (
            <RenderRoute key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
