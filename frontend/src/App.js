import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
