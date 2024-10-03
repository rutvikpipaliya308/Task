import axios from 'axios';

export const FETCH_REVIEWS_REQUEST = 'FETCH_REVIEWS_REQUEST';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';

export const getReviews = () => async (dispatch) => {
    dispatch({ type: FETCH_REVIEWS_REQUEST });

    try {
        const response = await axios.get('https://dev-abt1u4l9bzxp4ml.api.raw-labs.com/customer-reviews');
        //Take only 4 items        
        dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: response.data.reviews.slice(0, 4) });
    } catch (error) {
        dispatch({ type: FETCH_REVIEWS_FAILURE, payload: error.message });
    }
};
