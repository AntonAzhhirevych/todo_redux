import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from './notesReducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  notes: notesReducer,
});

// const reducer = (state = 0, action) => state;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
