import { WebService } from './webServices';

export const setAccessTokenToHeader = (token) => {
  if (token) {
    WebService.defaults.headers.common.Authorization = `${token}`;
  } else {
    delete WebService.defaults.headers.common.Authorization;
  }
};
