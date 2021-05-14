import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware) //,
    // window.devToolsExtension && window.devToolsExtension()
 ) );
 
sagaMiddleware.run(rootSaga);
export default store;