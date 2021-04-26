import { FetchProductRequest } from '../utils/api';

export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_LOADING = 'FETCH_PRODUCT_LOADING';

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProduct = id => async dispatch => {
  const method = 'get';
  const path = `/product/${id}/`;
  try {
    dispatch({ type: FETCH_PRODUCT_LOADING });
    const response = await FetchProductRequest(method, path);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
