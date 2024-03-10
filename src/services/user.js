/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class UserService extends BaseService {
  constructor() {
    super('user');
  }

  /**
   * Get user details
   * @returns A promise containing user details.
   */
  getUserEager() {
    return this.get('eager');
  }

  /**
   * Get user access controls
   * @returns A promise containing user access controls.
   */
  getAccessControls(data) {
    return this.get('access-controls', data);
  }

  /**
   * Get user registrations
   * @returns A promise containing user registrations.
   */
  getRegistrations(data) {
    return this.get('registrations', data);
  }

  /**
   * verify user email.
   * @returns A promise containing the results
   */
  sendVerificationEmail() {
    return this.post('send-verification-email');
  }

  /**
   * Get user access control
   * @returns A promise containing user details.
   */
  getUserAccessControl() {
    return this.get('access-control');
  }

  /**
   * Update user details
   * @returns A promise containing updated user details
   */
  updateUserAccessControl(data) {
    return this.patch('access-control', data);
  }

  /**
   * Get user profile
   * @returns A promise containing user profile.
   */
  getUserProfile() {
    return this.get('profile');
  }

  /**
   * Update user profile
   * @returns A promise containing updated user profile
   */
  updateUserProfile(data) {
    return this.patch('profile', data);
  }

  /**
   * Update user StyledAvatar
   * @returns A promise containing updated user avatar
   */
  updateUserAvatar(data) {
    return this.upload('profile/avatar', data);
  }

  /**
   * Get user billing address
   * @returns A promise containing user billing address
   */
  getUserBillingAddress() {
    return this.get('billing-address');
  }

  /**
   * Update user billing address
   * @returns A promise containing updated user billing address
   */
  updateUserBillingAddress(data) {
    return this.patch('billing-address', data);
  }

  /**
   * Get user settings
   * @returns A promise containing user settings
   */
  getUserSettings() {
    return this.get('settings');
  }

  /**
   * Update user settings
   * @returns A promise containing updated user settings
   */
  updateUserSettings(data) {
    return this.patch('settings', data);
  }

  /**
   * Get user transactions
   * @param {Object} data
   * @param {String} data.orderBy - Column to order by..
   * @param {string} data.orderDir - The order to use(ASC/DESC..).
   * @param {Number} data.page - The page number to fetch
   * @param {Number} data.pageSize - How many results per page.
   * @param {Boolean} data.imBuyer - Are you fetching buyer or seller transactions
   * @returns A promise containing transactions details
   */
  getAllTransactions(data) {
    return this.get('transactions', data);
  }

  /**
   * Get user purchases
   * @param {Object} data
   * @param {String} data.orderBy - Column to order by..
   * @param {string} data.orderDir - The order to use(ASC/DESC..).
   * @param {Number} data.page - The page number to fetch
   * @param {Number} data.pageSize - How many results per page.
   * @param {Boolean} data.isWorkshop - fetch workshops
   * @param {Boolean} data.isLive - fetch LIVE events
   * @returns A promise containing purchases details
   */
  getAllPurchases(data) {
    return this.get('purchases', data);
  }

}
