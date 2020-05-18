import React from "react";
import { Route, Router, Switch } from "react-router";
import UserDetailPage from "./pages/UserDetailPage";
import { history } from "./history";
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={UserDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
