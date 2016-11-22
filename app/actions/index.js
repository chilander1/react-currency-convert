import * as types from './types';
import parseString  from 'xml-js';

export function checkCurrency(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
export function checkDate(changeDate) {
    return {
        type: types.CHANGE_DATE,
        changeDate
    };
}

export const selectReddit = reddit => ({
    type: types.SELECT_REDDIT,
    reddit
});

export const invalidateReddit = reddit => ({
    type: types.INVALIDATE_REDDIT,
    reddit
});

export const requestPosts = reddit => ({
    type: types.REQUEST_POSTS,
    reddit
});

export const receivePosts = (reddit, json) => ({
    type: types.RECEIVE_POSTS,
    reddit,
    posts: json.ValCurs.map(child => child.data),
    receivedAt: Date.now()
});

const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit));
    const myInit = {
        mode: 'no-cors',
        headers: {'Content-Type': 'text/xml'}
    };
    const myRequest = new Request(`http://www.cbr.ru/scripts/XML_daily.asp?date_req=${reddit}`, myInit);
    return fetch(myRequest)
        .then((response) => {
            parseString(response.json(), (err, result) => {
                console.log(err, result);
            });
            // then(json => dispatch(receivePosts(reddit, json)));
            // .then(json => dispatch(receivePosts(reddit, convert.xml2json(json, {compact: true, spaces: 4}))));
        });
};


const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit];
    if (!posts) {
        return true;
    }
    if (posts.isFetching) {
        return false;
    }
    return posts.didInvalidate;
};

export function fetchPostsIfNeeded(reddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), reddit)) {
            dispatch(fetchPosts(reddit));
        }
    };
}
