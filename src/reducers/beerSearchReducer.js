import { SEARCH_BEER } from '../actions/types';



export default (state = '', action) => {
  switch(action.type){
    case SEARCH_BEER:
      return {...state, action}
     default:
      return state;
  }
}
