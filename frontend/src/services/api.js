import { fetchWrapper } from './request';

export const httpService = (method, url, data, params) => {
  return fetchWrapper(method, `${url}`, data, params).then((res) => res);
};
