import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Content from "./Content/Content";
import Edit from "../components/Edit/Edit";
import './App.css';


function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/" exact render={() => <Redirect to='/pages/home'/>}/>
            <Route path="/pages/admin" exact component={Edit}/>
            <Route path="/pages/:name"  component={Content}/>
            <Route render={() => <h1>404</h1>}/>
        </Switch>
    </Layout>
  );
}

export default App;
