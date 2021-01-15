import React, { useEffect, useState } from 'react';
import BeerReviewForm from './BeerReviewForm';
import untappd, { API_KEYS } from '../../api/untappd';

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
      setResults(data);
    };
    search();
  }, [props.match.params.bid])


  return (
    <BeerReviewForm beer={results}/>
  )
}

export default AddBeer
