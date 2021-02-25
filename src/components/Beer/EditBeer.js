import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BeerReviewForm from './BeerReviewForm';
import untappd, { API_KEYS } from '../../api/untappd';
import { deleteBeer } from '../../actions';
import { Button, Box, Image, Heading, Center } from '@chakra-ui/react';

const EditBeer = (props) => {
  

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
      setResults(data);
    };
    search();
  }, [props.match.params.bid])

  const handleDelete = () => {
    props.deleteBeer(props.match.params.bid)
  }

  return (
    <Box p={5}>

      <Image my={3} margin="auto" boxSize="250px" src={results.beer_label}/>
        <Center>
          <Heading color="#fc0" textAlign="center">UT Rating: {results.rating_score}</Heading>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/92/Untappd.svg" boxSize="50px"></Image>
        </Center>

      <BeerReviewForm
        beer={results}
        isAdded
        review={props.beers[props.match.params.bid] && props.beers[props.match.params.bid].review}
      />
      <Button bg="tomato" onClick = {handleDelete}>DELETE</Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return{
    beers: state.beers
  }
}

export default connect(mapStateToProps, { deleteBeer })(EditBeer);
