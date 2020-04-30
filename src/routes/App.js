import React, { lazy, Suspense } from 'react';
import './App.css';
import Layout from '../components/Layout/';
import { Switch, Route } from 'react-router-dom';
import Spinner from '../components/Spinner/index';
// import ModelsPage from '../pages/ModelsPage';
// import OneModelPage from '../pages/OneModelPage';
// import NotFound from '../pages/NotFound';
const ModelsPage = lazy(() => import('../pages/ModelsPage'));
const OneModelPage = lazy(() => import('../pages/OneModelPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Switch>
          <Route exact path='/' render={() => <ModelsPage />} />
          <Route
            exact
            path='/model/:id'
            render={() => <OneModelPage />}
          ></Route>
          <Route render={() => <NotFound />}></Route>
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default App;
