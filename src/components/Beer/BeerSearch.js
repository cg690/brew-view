import React, { useState, useEffect } from 'react';
import { Input, Stack, Box} from '@chakra-ui/react';

import { connect } from 'react-redux';

import untappd, { API_KEYS } from '../../api/untappd';

import BeerSearchResult from './BeerSearchResult';





const BeerSearch = (props) => {

  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000)

    return () => {
      clearTimeout(timerId);
    }
  }, [term]);


  useEffect(() => {
    
  const search = async () => {
    const { data } = await untappd.get('/search/beer', {
      params: {
        ...API_KEYS,
        q: debouncedTerm,
        limit: 5
      }
    });
    setResults(data.response.beers.items)
  };


    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);



  const renderResults = results.map( result => {
    return(
      <BeerSearchResult
        beer={result.beer}
        brewery={result.brewery}
        key={result.beer.bid}
        isAdded={result.beer.bid in props.beers}
      />
    )
  })

  return (
    <Box w="100%">
      <Input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="search for a beer"
      size="md"
      />
      <Stack spacing={4} mb="6" bg="white">
        {renderResults}
      </Stack>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps)(BeerSearch);
