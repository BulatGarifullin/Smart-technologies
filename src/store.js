import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, productReducer, appReducer, productsReducer } from './reducers';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	product: productReducer,
	products: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
