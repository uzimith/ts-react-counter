import { ACTIONS } from '../constants'

export default function counter(state = 12, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT_COUNTER:
            return state + 1;
        case ACTIONS.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
