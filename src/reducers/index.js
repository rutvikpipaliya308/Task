import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
    reviews: reviewReducer
});

export default rootReducer;
