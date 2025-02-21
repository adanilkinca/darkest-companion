import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../reducer';

// Ensure DevTools is only included when explicitly enabled
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Remove DevTools if you don't want the panel
const isDevToolsEnabled = false; // Set to `true` if you ever want it back

if (!isDevToolsEnabled) {
  composeEnhancers = compose; // Disable Redux DevTools
}

export function createNewStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  persistStore(store);
  return store;
}

export default createNewStore();
