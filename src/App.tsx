import React from "react";
import { Route, Router, Switch } from "react-router";
import UserDetailPage from "./pages/UserDetailPage";
import { history } from "./history";
import PerformanceUseMemoPage from "./pages/PerformanceUseMemoPage";
import CompactWithClassPage from "./pages/CompactWithClassPage";
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={UserDetailPage} />
        <Route exact path="/memo" component={PerformanceUseMemoPage} />
        <Route exact path="/class-hook" component={CompactWithClassPage} />
      </Switch>
    </Router>
  );
};

export default App;
