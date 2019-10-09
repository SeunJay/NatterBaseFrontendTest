import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard"
import AccountSettings from "./components/account-settings/AccountSettings"
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="App">hello world</div> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/account-settings" component={AccountSettings} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
