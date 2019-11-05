import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
