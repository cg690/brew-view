import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import untappd, { API_KEYS } from '../../api/untappd';

import BeerInfo from './BeerInfo';

import { Box } from '@chakra-ui/react';

const ViewBeer = (props) => {

  const [results, setResults] = useState({});

  useEffect(() => {
    const search = async () => {
      const response = await untappd.get(`/beer/info/${props.match.params.bid}`, {
        params: {
          BID: props.match.params.bid,
          ...API_KEYS,
          compact: true
        }
      });
      const data = response.data.response.beer;
      
      data.rating_score = Math.round(data.rating_score*100)/100
      setResults(data);
    };
    search();
  }, [props.match.params.bid])


  return (
    <Box p={5}>
      <BeerInfo beer={results} />
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps, null)(ViewBeer);
