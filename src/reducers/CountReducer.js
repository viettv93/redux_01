import { COUNTER_CHANGE, ACTION_DEVIDE } from '../actions/CountAction';
const initialState = {
    count: 0,
    name: 'Việt'
};

const countReducer = (state = initialState, action) => {
    console.log(JSON.stringify(action))
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        case ACTION_DEVIDE:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}
export default countReducer;