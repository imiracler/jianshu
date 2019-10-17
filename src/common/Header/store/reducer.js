import * as actionTypes from './constants';
import { fromJS } from 'immutable';


const defaultValue = fromJS({
    focused: false
}); 

export default (state = defaultValue, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARHC_BLUR:
            return state.set('focused', false);
        default:
            return state;
    }
} 