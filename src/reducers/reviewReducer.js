import { FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE } from '../actions/reviewActions';

const initialState = {
    loading: false,
    reviews: [],
    error: ''
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload,
                error: ''
            };
        case FETCH_REVIEWS_FAILURE:
            return {
                loading: false,
                reviews: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default reviewReducer;
