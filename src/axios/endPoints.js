export const rootConfig = {
  // apiRoot: 'http://127.0.0.1:8000/api',
  apiRoot: 'https://api.yutuparty.com/api',
};

export const apiEndPoints = {
  createRoom: `${rootConfig.apiRoot}/createRoom/`,
  joinRoom : `${rootConfig.apiRoot}/joinRoom/`
  };
