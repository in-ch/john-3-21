import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Product from "./pages/Product";
import Mail from "./pages/Mail";

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
            </Switch>
          </Router>
          {/* <Home /> */}
        </>
      </Layout>
  );
}

export default App;
