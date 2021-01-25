import { 
  FETCH_BEERS,
  ADD_BEER,
  ADD_BEER_ERR,
  DELETE_BEER,
  DELETE_BEER_ERR,
  EDIT_BEER,
  EDIT_BEER_ERR,
  FETCH_BEER
} from './types';
import history from '../history'



// import untappd, { API_KEYS } from '../api/untappd';

//turning data into dictionary based of bid to make it better to work with
export const fetchBeers = (beers) => {
  return{
    type: FETCH_BEERS,
    payload: beers
  }
}

export const fetchBeer = (beer) => {
  return {
    type: FETCH_BEER,
    payload: beer
  }
}

export const addBeer = (formValues, bid) => {
  console.log("adding ", bid, " : ", formValues )
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("beers")
      .doc(bid.toString())
      .set({
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
      history.push('/');
  };
};

export const editBeer = (beer) => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("beers")
      .doc(beer.id)
      .update(
        {
          review: beer.review
        }
      )
      .then(() => {
        dispatch({
          type: EDIT_BEER,
          beer
        })
      })
      .catch((err) => {
        dispatch({
          type: EDIT_BEER_ERR,
          err
        });
      });
      history.push('/');
  };
};


export const selectBeer = (beer) => {
  return {
    type: 'SELECT_BEER',
    payload: beer
  };
};

export const deleteBeer = (bid) => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("beers")
      .doc(bid.toString())
      .delete()
      .then(() => {
        dispatch({
          type: DELETE_BEER,
          payload: bid.toString()
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
