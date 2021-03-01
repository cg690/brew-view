import React, { useEffect, useState } from 'react';
import BeerReviewForm from './BeerReviewForm';
import untappd, { API_KEYS } from '../../api/untappd';
import BeerInfo from './BeerInfo';
import { Box } from '@chakra-ui/react';

const AddBeer = (props) => {
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
      <BeerReviewForm beer={results}/>
    </Box>
  )
}

export default AddBeer
