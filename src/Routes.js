import React, { Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./App'));
const DataEntry = React.lazy(() => import('./components/dataEntryMenu'));
const Query = React.lazy(() => import('./components/queryMenu'));
const Report = React.lazy(() => import('./components/reportMenu'));

const Candidates = React.lazy(() => import('./components/forms/formCandidates'));
const Divisions = React.lazy(() => import('./components/forms/formDivisions'));
const Employees = React.lazy(() => import('./components/forms/formEmployees'));
const Ministries = React.lazy(() => import('./components/forms/formMinistries'));
const Positions = React.lazy(() => import('./components/forms/formPositions'));
const Data = React.lazy(() => import('./components/fetch'));
const QueryView = React.lazy(() => import('./components/queryView'));
const ReportView = React.lazy(() => import('./components/reportView'));

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1 style={{ color: 'white', backgroundColor: 'wheat' }}>Loading</h1>}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/dataEntry">
                        <DataEntry />
                    </Route>
                    <Route exact path="/dataEntry/form/Candidates">
                        <Candidates />
                    </Route>
                    <Route exact path="/dataEntry/form/Divisions">
                        <Divisions />
                    </Route>
                    <Route exact path="/dataEntry/form/Employees">
                        <Employees />
                    </Route>
                    <Route exact path="/dataEntry/form/Ministries">
                        <Ministries />
                    </Route>
                    <Route exact path="/dataEntry/form/Positions">
                        <Positions />
                    </Route>
                    <Route exact path="/queries">
                        <Query />
                    </Route>
                    <Route exact path="/reports">
                        <Report />
                    </Route>
                    <Route exact path="/getData">
                        <Data />
                    </Route>
                    <Route exact path="/query/view">
                        <QueryView />
                    </Route>
                    <Route exact path="/report/view">
                        <ReportView />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;
