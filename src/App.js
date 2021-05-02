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
  return (
    <GlobalProvider>
      <Router>
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
