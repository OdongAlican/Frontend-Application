import {
  FETCH_PRODUCT_SUCCESS,
} from '../actions/product';

const initialState = {
  product: {},
  error: '',
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
