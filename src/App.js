import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExploreStore from "./containers/ExploreStore";
import ShopProfile from "./containers/newShopProfile";
import Signin from "./containers/Signin";
import Signup from "./containers/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
          <Route path="/:storeId/store" exact component={ShopProfile} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
