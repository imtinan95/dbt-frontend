import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./App"));
const DataEntry = React.lazy(() => import("./components/dataEntryMenu"));
const DataEntryForm = React.lazy(() => import("./components/dataEntryForm"));
const Query = React.lazy(() => import("./components/queryForm"));
const Report = React.lazy(() => import("./components/reportForm"));

function Routes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <h1 style={{ color: "white", backgroundColor: "wheat" }}>Loading</h1>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dataEntry">
            <DataEntry />
          </Route>
          <Route exact path="/dataEntry/form">
            <DataEntryForm />
          </Route>

          <Route exact path="/queries">
            <Query />
          </Route>
          <Route exact path="/reports">
            <Report />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
