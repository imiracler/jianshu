import { combineReducers } from 'redux';
import { reducer as HeaderReducer } from '../common/Header/store';

const reducer = combineReducers({
    header: HeaderReducer
});

export default reducer;