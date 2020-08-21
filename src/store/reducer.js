import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/Header/store';
import  { reducer as HomeReducer}  from '../pages/home/store';

const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer
});

export default reducer;