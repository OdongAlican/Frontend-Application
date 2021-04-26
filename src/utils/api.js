/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'https://api-test.innoloft.com';

export const FetchProductRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}${path}`);
  return response;
};
