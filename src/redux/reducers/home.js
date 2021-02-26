import actions from 'redux/actions/home';
import get from 'lodash/get';

export const defaultState = {
    block: 'home',
    scrollRef: null,
};

function reducer(state = defaultState, { type, payload = {} }) {
    const {
        actionTypes
    } = actions;

    switch (type) {
        case actionTypes.SET_BLOCK: {
            const block = get(payload, 'block', 'home');
            return {
                ...state,
                block,
            }
        }
        case actionTypes.SET_SCROLL_REF: {
            const scrollRef = get(payload, 'ref', 'home');
            return {
                ...state,
                scrollRef,
            }
        }
        default:
            return state
    }
}

export default reducer;