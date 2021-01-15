import { FETCH_BEERS, ADD_BEER, ADD_BEER_ERR, DELETE_BEER, DELETE_BEER_ERR } from './types';
import history from '../history'
import _ from 'lodash';


// import untappd, { API_KEYS } from '../api/untappd';

//turning data into dictionary based of bid to make it better to work with
export const fetchBeers = (beersData) => {
  const dict = _.mapKeys(beersData,(data => {
      return data.bid
    })
  )

  return{
    type: FETCH_BEERS,
    payload: dict
  }
}

export const addBeer = (bid, formValues) => {
  console.log("adding ", bid, " : ", formValues )
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("beers")
      .add({
        ...formValues,
        bid: bid
      })
      .then(() => {
        dispatch({
          type: ADD_BEER,
          payload: {...formValues, bid}
        });
      })
      .catch( err => {
        dispatch({
          type: ADD_BEER_ERR,
          err
        });
      });
    history.push('/')
  }


}

export const selectBeer = (beer) => {
  return {
    type: 'SELECT_BEER',
    payload: beer
  };
};

export const deleteBeer = (beer) => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("beers")
      .doc(beer.id)
      .delete()
      .then(() => {
        dispatch({
          type: DELETE_BEER,
          payload: beer.bid
        });
      })
      .catch(err => {
        dispatch({
          type: DELETE_BEER_ERR,
          err
        });
      });
      history.push('/');
  }
}
