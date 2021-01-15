import React from 'react';

import { Box } from '@chakra-ui/react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from './HomePage';
import AddBeer from './Beer/AddBeer';
import EditBeer from './Beer/EditBeer';


const App = () => {
  return (
    <Box h="100vh" bgGradient="linear(to-tr, green.200, pink.500)" >
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/beers/add/:bid" exact component={AddBeer}/>
          <Route path="/beers/edit/:bid" exact component={EditBeer}/>
        </Switch>      
      </Router>
    </Box>
  );
}

export default App;