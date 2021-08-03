import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
