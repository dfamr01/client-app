/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class StripeService extends BaseService {
  constructor() {
    super('stripe');
  }

  /**
   * check stripe account
   * @returns A promise containing the results
   */
  checkAccount() {
    return this.get('create-check');
  }

  /**
   * Get stripe dashboard link
   * @returns A promise containing the dashboard link
   */
  getDashboardLink() {
    return this.get('get-dashboard-link');
  }

  /**
   * Create stripe account
   * @returns A promise containing the results
   */
  createAccount() {
    return this.post('create-account');
  }

  /**
   * Create stripe account link
   * @returns A promise containing the results
   */
  createAccountLink() {
    return this.post('create-account-link');
  }

  /**
   * Create payment intent
   * @returns A promise containing the results
   */
  paymentCreateIntent(data) {
    return this.post('payment-create-intent', data);
  }

  /**
   * delete customer payment methods
   * @returns A promise containing the results
   */
  paymentDeleteMethod(data) {
    return this.delete(`payment-delete-method/${data}`);
  }

  /**
   * List customer payment methods
   * @returns A promise containing the results
   */
  paymentListMethods() {
    return this.get('payment-list-methods');
  }

  /**
   * List customer payment methods
   * @returns A promise containing the results
   */
  paymentNewCharge(data) {
    return this.post('payment-new-charge', data);
  }

  /**
   * Update customer default payment methods
   * @returns A promise containing the results
   */
  paymentUpdateDpm(data) {
    return this.patch('payment-update-dpm', data);
  }

  /**
   * create refund user purchase
   * @returns A promise containing refund object
   */
  createContentRefund(data) {
    return this.post('create-content-refund', data);
  }

  /**
   * notify server on error with stripe
   * @returns A promise containing the results
   */
  transactionFailed(data) {
    return this.post(`transaction-failed/${data}`);
  }
}
