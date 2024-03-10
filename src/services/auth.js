/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class AuthService extends BaseService {
  constructor() {
    super('auth');
  }

  /**
   * register the user into the app.
   * @returns A promise containing the new user data.
   */
  register(data) {
    return this.post('register', data);
  }

  /**
   * login the user into the app.
   * @returns A promise containing the logged user data.
   */
  login(data) {
    return this.post('login', data);
  }

  /**
   * log the user out of the application.
   */
  logout() {
    return this.get('logout');
  }

  /**
   * Starts the forgot password process inside tha app.
   * @returns A promise containing the logged user data.
   */
  forgotPassword(data) {
    return this.post('forgot-password', data);
  }

  /**
   * Starts the reset password process inside tha app.
   * @param accessToken The token provided by the email.
   * @param data Any data passed to the reset password call.
   * @returns A promise containing the logged user data.
   */
  resetPassword(accessToken, data) {
    return this.post(`reset-password/${accessToken}`, data);
  }

  /**
   * verify user email.
   * @returns A promise containing the results
   */
  verifyEmail(data) {
    return this.get(`verify-email/${data}`);
  }

  /**
   * Requests a token for the social media user.
   * @returns A promise containing the issued token.
   */
  requestToken() {
    return this.get('request-token');
  }

}
