import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import NewMovie from '../pages/NewMovie';

function Routes() {
  return (
    <Switch>
      <Route path="/novo-filme" component={NewMovie} />
      <Route path="/:id/detalhes" component={MovieDetails} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
