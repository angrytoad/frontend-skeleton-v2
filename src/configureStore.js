import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/_RootReducer' // Or wherever you keep your reducers
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );

  if(module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/_RootReducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}