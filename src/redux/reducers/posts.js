// const actionTypes = require('redux/actions/auth');
import actions from 'redux/actions/posts';
import get from 'lodash/get';
// import { actionTypes } from 'redux/actions/auth';

export const defaultState = {
    isFetchingPosts: false,
    posts: [],
};

// eslint-disable-next-line complexity
function reducer(state = defaultState, { type, payload = {} }) {
    const {
        actionTypes
    } = actions;

    switch (type) {
        case actionTypes.GET_POSTS: {
            return {
                ...state,
                isFetchingPosts: true,
            }
        }
        case actionTypes.GET_POSTS_SUCCESS: {
            const posts = get(payload, 'data.Post', []);
            return {
                ...state,
                isFetchingPosts: false,
                posts,
            }
        }
        default:
            return state
    }
}

export default reducer;