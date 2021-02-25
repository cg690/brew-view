import React, { useEffect, useState } from 'react';
import BeerReviewForm from './BeerReviewForm';
import untappd, { API_KEYS } from '../../api/untappd';

import { Box, Image, Heading, Center } from '@chakra-ui/react';

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

      <Image my={3} margin="auto" boxSize="250px" src={results.beer_label}/>
      <Center>
        <Heading color="#fc0" textAlign="center">UT Rating: {results.rating_score}</Heading>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/92/Untappd.svg" boxSize="50px"></Image>
      </Center>
      
      <BeerReviewForm beer={results}/>
    </Box>
  )
}

export default AddBeer
