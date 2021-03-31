import React from 'react';

import { Box } from '@chakra-ui/react';
import { Router, Route, Switch } from 'react-router-dom';

import { fetchBeers } from '../actions';
import history from '../history';
import HomePage from './HomePage';
import AddBeer from './Beer/AddBeer';
import EditBeer from './Beer/EditBeer';
import ViewBeer from './Beer/ViewBeer';
import Header from './Header';
import BrewMap from './BrewMap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


class App extends React.Component {
  
  componentDidUpdate(){
   // console.log(this.props, " component update ")
    this.props.fetchBeers(this.props.beers);
  }

  render(){
    return(
      <Box>
      
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/beers/add/:bid" exact component={AddBeer}/>
            <Route path="/beers/edit/:bid" exact component={EditBeer}/>
            <Route path="/beers/view/:bid" exact component={ViewBeer}/>
            <Route path="/map" exact component={BrewMap} />
          </Switch>      
        </Router>
      </Box>
    )
  };
}


const mapStateToProps = (state, ownProps) => {
  const beers = state.firestore.data.beers;
  return {
    beers: beers
  };
};

export default compose(
  connect(mapStateToProps, { fetchBeers }),
  firestoreConnect((ownProps) => [
    {
      collection: 'beers'
    }
  ])
)(App);