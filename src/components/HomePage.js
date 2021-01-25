import React from 'react'
import BeerSearch from './Beer/BeerSearch';
import ReviewCard from './Beer/ReviewCard';
import { connect } from 'react-redux';

import { Link as ReachLink } from "react-router-dom"


//import { useSpring, animated } from 'react-spring';
import { SimpleGrid, Box, Link } from '@chakra-ui/react';


const HomePage = ( { beers } ) => {

  return (
    <Box m="auto" w="85%" p="50px">
      <BeerSearch />
      <SimpleGrid width="100%" minChildWidth="200px" spacing="40px">
        {
          beers && Object.keys(beers).map((key, index) => {
          let beer = beers[key]
          if(beer){
            return (
              <Link as={ReachLink} to={`/beers/view/${beer.bid}`} style={{ textDecoration: "none" }}>
                <ReviewCard key={index} beer={beer} />
              </Link>
              )
            }
            return undefined
          })
        }
      </SimpleGrid>
    </Box>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    beers: state.beers
  };
};

export default connect(mapStateToProps)(HomePage);

