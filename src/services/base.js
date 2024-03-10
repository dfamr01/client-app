/* eslint-disable import/prefer-default-export */
import axios from "axios";
//   todo: add ths back.
// import { logout } from "../utilities/auth";

import { API_URL } from "../config/config";
import { getAccessToken } from "../utilities/auth";
// import { getStore } from "utilities/store";
// import { setLoginModalStatus } from "../reduxUtils/browserSettings/actions";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (
      response &&
      response.status === 401 &&
      response?.data?.data?.error === "TokenExpiredError"
    ) {
      // logout();
      // const { dispatch } = getStore();
      // dispatch(setLoginModalStatus(true));
    }
    return Promise.reject(error);
  }
);

/**
 * Base service class to be inherited from all services.
 * Services should be pointed to an specific endpoint.
 */
export class BaseService {
  constructor(prefix) {
    prefix = prefix ? `/${prefix}` : "";
    this.serviceUrl = `${API_URL}${prefix}`;
    this.headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      pragma: "no-cache",
    };
    this._requestConfig = {
      headers: this.headers,
    };
  }

  /**
   * Performs a HTTP GET to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be fetched.
   * @param {object} queryParams Any query parameter to send with the request.
   * @param {boolean} skipToken for public-unsafe calls
   * @returns The response from the server.
   */
  get(
    endpoint = "",
    queryParams = null,
    skipToken = false,
    requestConfig = {}
  ) {
    if (!skipToken) {
      this._appendToken();
    }
    let reqConfig = Object.assign({}, this._requestConfig, requestConfig);
    reqConfig.params = queryParams;
    return axios
      .get(`${this.serviceUrl}/${endpoint}`, reqConfig)
      .then((res) => res.data)
      .catch((err) => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  /**
   * Performs a HTTP POST to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be posted.
   * @param {object} data Data to include in the body of the request.
   * @param {boolean} skipToken for public-unsafe calls
   * @param {object} requestConfig for public-unsafe calls
   * @returns The response from the server.
   */
  post(
    endpoint = "",
    data = {},
    skipToken = false,
    requestConfig = {},
    headers = null
  ) {
    if (!skipToken) {
      this._appendToken();
    }

    let reqConfig = Object.assign({}, this._requestConfig, requestConfig);
    if (headers) {
      Object.assign(reqConfig.headers, headers);
    }
    // console.log(`${this.serviceUrl}/${endpoint}`, data, reqConfig);
    return axios
      .post(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then((res) => res.data)
      .catch((err) => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  /**
   * Performs a HTTP PUT to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @param {boolean} skipToken for public-unsafe calls
   * @param {object} requestConfig for public-unsafe calls
   * @returns The response from the server.
   */
  put(endpoint = "", data = {}, skipToken = false, requestConfig = {}) {
    if (!skipToken) {
      this._appendToken();
    }
    let reqConfig = Object.assign({}, this._requestConfig, requestConfig);
    return axios
      .put(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then((res) => res.data)
      .catch((err) => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  /**
   * Performs a HTTP PATCH to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @param {boolean} skipToken for public-unsafe calls
   * @param {object} requestConfig for public-unsafe calls
   * @returns The response from the server.
   */
  patch(endpoint = "", data = {}, skipToken = false, requestConfig = {}) {
    if (!skipToken) {
      this._appendToken();
    }

    let headers = this._requestConfig.headers;
    if (requestConfig.headers) {
      requestConfig.headers = { ...headers, ...requestConfig.headers };
    }

    let reqConfig = Object.assign({}, this._requestConfig, requestConfig);
    return axios
      .patch(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then((res) => res.data)
      .catch((err) => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  /**
   * Performs a HTTP PATCH to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @param {boolean} skipToken for public-unsafe calls
   * @returns The response from the server.
   */
  upload(endpoint = "", data = {}, skipToken = false, requestConfig = null) {
    if (!skipToken) {
      this._appendToken();
    }
    return this.patch(endpoint, data, false, requestConfig);
  }

  /**
   * Performs a HTTP DELETE to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be deleted.
   * @param {string} id Identifier of the resource to delete.
   * @param {boolean} skipToken for public-unsafe calls
   * @param {object} requestConfig for public-unsafe calls
   * @returns The response from the server.
   */
  delete(endpoint = "", id, skipToken = false, requestConfig = {}) {
    if (!skipToken) {
      this._appendToken();
    }
    let reqConfig = Object.assign({}, this._requestConfig, requestConfig);
    return axios
      .delete(`${this.serviceUrl}/${endpoint}`, reqConfig)
      .then((res) => res.data)
      .catch((err) => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  /**
   * Appends the bearer token to each request made.
   */
  _appendToken() {
    let accessToken = getAccessToken();
    if (accessToken) {
      this.headers["Authorization"] = accessToken;
    }
  }
}
