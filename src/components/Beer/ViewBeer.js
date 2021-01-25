import React from 'react'
import { connect } from 'react-redux';

import { Box } from '@chakra-ui/react';

const ViewBeer = (props) => {
  return (
    <Box>
      {props.beers[props.match.params.bid].beer.name}
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps, null)(ViewBeer);
