import actions from 'redux/actions/home';
import get from 'lodash/get';

export const defaultState = {
    block: 'home',
    scrollRef: null,
    isLoading: true,
    isMobile: false,
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
        case actionTypes.SET_DEVICE: {
            const isMobile = get(payload, 'isMobile', false);
            return {
                ...state,
                isLoading: false,
                isMobile,
            }
        }
        default:
            return state
    }
}

export default reducer;