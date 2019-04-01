import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import modal from "./modal/reducer";
import auth from "./auth/reducer";


const rootReducer = combineReducers({
  auth,
  modal,
  
});

const store = createStore(
  rootReducer,
  
  compose(  applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

// import { combineReducers, compose, applyMiddleware, createStore } from 'redux';


// // Reducers
// import modal from "./modal/reducer";
// import auth from "./auth/reducer";

// const rootReducer = combineReducers({
//   auth,
//   modal
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// );

// export default store;
