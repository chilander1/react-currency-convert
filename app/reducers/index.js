import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import moment from 'moment';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const changeDate = (state = moment(), action) => {
    switch (action.type) {
        case types.CHANGE_DATE:
            return action.changeDate;
        default:
            return state;
    }
};

const selectedReddit = (state = '18/11/2016', action) => {
    switch (action.type) {
        case types.SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case types.INVALIDATE_REDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case types.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case types.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
};

const postsByReddit = (state = { }, action) => {
    switch (action.type) {
        case types.INVALIDATE_REDDIT:
        case types.RECEIVE_POSTS:
        case types.REQUEST_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action)
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    changeDate,
    postsByReddit,
    selectedReddit,
    routing
});

export default rootReducer;
