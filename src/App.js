import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn } from "./actions";
import ExploreStore from "./containers/ExploreStore";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); 


  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedIn());
  //   }
  // }, [auth.authenticate]);
// 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
