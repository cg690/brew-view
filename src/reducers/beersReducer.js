import { 
  FETCH_BEERS,
  ADD_BEER,
  ADD_BEER_ERR,
  DELETE_BEER,
  DELETE_BEER_ERR
} from '../actions/types';

import _ from 'lodash';



export default (state = {} , action) => {
  
  switch(action.type){
    case FETCH_BEERS:
      return {...state, ...action.payload};
    case ADD_BEER:
      return {...state, [action.payload.bid]: action.payload };
    case ADD_BEER_ERR:
      console.log("ERROR OCCURED ADDING BEER");
      return state;
    case DELETE_BEER:
      return _.omit(state, action.payload);
    case DELETE_BEER_ERR:
      console.log('ERROR OCCURED DELETING BEER')
      return state;
    default:
      return state;
  }
}

