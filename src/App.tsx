import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import Product from "./pages/Product";

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
            </Switch>
          </Router>
          {/* <Home /> */}
        </>
      </Layout>
  );
}

export default App;
