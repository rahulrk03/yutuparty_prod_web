import axios from 'axios';
import { rootConfig } from './endPoints';
// import { setAccessTokenToHeader } from './helper';
// import { setUserDataToLocal } from '../cookies/helper';

export const WebService = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    'Content-Type': 'application/json'
  }
});

// WebService.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     if (err.response.status === 401 || err.response.status === 403) {
//       setAccessTokenToHeader();
//       setUserDataToLocal();
//     }
//     return err;
//   }
// );
