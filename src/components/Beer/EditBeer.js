import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BeerReviewForm from './BeerReviewForm';
import untappd, { API_KEYS } from '../../api/untappd';
import { deleteBeer } from '../../actions';
import { Button, Box } from '@chakra-ui/react';
import BeerInfo from './BeerInfo';

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
      
      data.rating_score = Math.round(data.rating_score*100)/100
      setResults(data);
    };
    search();
  }, [props.match.params.bid])

  const handleDelete = () => {
    props.deleteBeer(props.match.params.bid)
  }

  return (
    <Box p={5}>
      <BeerInfo beer={results} />

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
