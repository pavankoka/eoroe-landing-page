import actions from 'redux/actions/home';
import get from 'lodash/get';

export const defaultState = {
    block: 'home',
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
        default:
            return state
    }
}

export default reducer;