import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
    const middleware = [thunk];
    const store = createStore(
        rootReducer,
        DevTools.instrument(),
        applyMiddleware(...middleware),
        initialState
    );
    return store;
}
