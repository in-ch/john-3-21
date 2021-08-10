import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Product from "./pages/Product";
import Mail from "./pages/Mail";
import Profile from "./pages/Profile";

function App() {
  return (
      <Layout>
        <>
          <Router>
            <Switch>
              <Route path={routes.home} exact>
                  <Home />
              </Route>
              <Route path={routes.outer} exact>
                  <Product />
              </Route>
              <Route path={routes.mail} exact>
                  <Mail />
              </Route>
              <Route path={routes.profile} exact>
                  <Profile />
              </Route>
            </Switch>
          </Router>
        </>
      </Layout>
  );
}

export default App;
