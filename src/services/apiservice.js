import axios from 'axios';
import {CONSTANTS} from '../constants';
import qs from 'qs';

export const request = (
  url,
  type,
  data,
  token = null,
  // apiType = CONSTANTS.onboarding_url,
  noStringify = true,
  downloadFile = false,
) => {
  const baseURL = CONSTANTS.BASE_URL;
  let API_URL = `${baseURL}${url}`;
  let activeUrl = url.split('://');
  console.log(activeUrl[0], 'exploded file');
  if (activeUrl[0] === 'https' || activeUrl[0] === 'http') {
    API_URL = url;
  } else {
    API_URL = `${baseURL}${url}`;
  }

  let bodyData;
  let service;
  // bodyData = noStringify ? JSON.stringify(data) : data;
  // bodyData = JSON.stringify(data);
  // bodyData = qs.stringify(data);
  bodyData = data;
  let config;

  if (downloadFile) {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer',
    };
  } else if (token) {
    let TOKEN = null;
    if (activeUrl[0] === 'https') {
      TOKEN = token;
    } else {
      TOKEN = `Bearer ${token}`;
    }
    config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        // 'Content-type': 'application/json',
        Authorization: TOKEN,
        'api-key': TOKEN,
      },
      timeout: 60 * 4 * 1000,
    };
    console.log('config', 'here man tokennnnnn');
  } else {
    config = {
      'Content-type': 'application/x-www-form-urlencoded',
    };
  }
  if (type.toLowerCase() === 'get') {
    service = axios.get(API_URL, config);
    return service
      .then((response) => {
        return service;
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
          } else {
            return service;
          }
        }
        return service;
      });
  } else if (type.toLowerCase() === 'post') {
    service = axios.post(API_URL, bodyData, config);
    return service
      .then((response) => {
        return service;
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 401) {
          } else {
            return service;
          }
        }
        return service;
      });
  } else if (type.toLowerCase() === 'delete') {
    service = axios.delete(API_URL, config);
    return service
      .then(function (response) {
        return service;
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 401) {
          } else {
            return service;
          }
        }
        return service;
      });
  } else {
    service = axios.put(API_URL, bodyData, config);
    return service
      .then(function (response) {
        return service;
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 401) {
          } else {
            return service;
          }
        }
        return service;
      });
  }
};

// export const handleAPICall = (route, method, token ,data = {}) => {
export const handleAPICall = (route, method, token, data = {}) =>
  new Promise((resolve, reject) => {
    request(route, method, data, token)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
