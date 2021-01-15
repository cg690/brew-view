 import { combineReducers } from 'redux';
 import { firebaseReducer } from 'react-redux-firebase';
 import { firestoreReducer } from 'redux-firestore';
 import beersReducer from './beersReducer'


//  const selectedBeerReducer = (state = null, action) => {
//    switch(action.type){
//      case 'SELECT_BEER':
//        return action.payload;
//       default:
//         return state;
//    }
//  }

 
 export default combineReducers({
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   beers: beersReducer
 });
