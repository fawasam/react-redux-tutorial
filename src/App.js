import Header from "./containers/Header";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={ProductListing}/>
      <Route exact path="/product/:productId" component={ProductDetails}/>
      {/* <Route path="/" component={ProductComponent}/> */}
      <Route>404 NOT FOUND!</Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
