import React, { useEffect, useState } from 'react'
import BeerList from './Beer/BeerList';
import BeerSearch from './Beer/BeerSearch';
import ReviewCard from './Beer/ReviewCard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { fetchBeers } from '../actions';

//import { useSpring, animated } from 'react-spring';
import { SimpleGrid, Box } from '@chakra-ui/react';

import _ from 'lodash';

const HomePage = ( { beers, fetchBeers } ) => {



  const [data, setData] = useState({});

  useEffect(() => {
    fetchBeers(beers)
    const dict = _.mapKeys(beers,(data => {
        return data.bid
      })
    )
    setData(dict)
  },[beers, fetchBeers])

  const renderCards = Object.keys(data).map((key, index) => {
      let beer = data[key]
      return (
        <ReviewCard key={index} beer={beer} />
      )
    })

  return (
    <Box m="auto" w="70%" p="50px">
      <BeerList />
      <BeerSearch />

      <SimpleGrid width="100%" minChildWidth="20%" spacing="40px">
        {renderCards}
      </SimpleGrid>
    </Box>
  )
}

const mapStateToProps = (state, ownProps) => {
  const beers = state.firestore.ordered.beers;
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
)(HomePage);

