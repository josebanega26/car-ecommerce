import React from 'react';
import './App.css';
import Layout from '../components/Layout';
import { Switch, Route } from 'react-router-dom';
import ModelsPage from '../containers/ModelsPage';
import OneModelPage from '../containers/OneModelPage';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={ModelsPage} />
        <Route exact path='/model/:id' component={OneModelPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  );
};

export default App;
