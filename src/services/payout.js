/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class PayoutService extends BaseService {
  constructor() {
    super('payout');
  }

  /**
   * Generate creators payouts
   * @returns A promise containing payouts details.
   */
  generatePayouts() {
    return this.get('generate');
  }

  /**
   * Get creator payout
   * @returns A promise containing payout details.
   */
  getPayout(id) {
    return this.get(id);
  }

  /**
   * Get All creator payouts
   * @returns A promise containing payouts details.
   */
  getAllPayouts(data) {
    return this.get('all', data);
  }

  /**
   * Request payout funds transfer
   * @returns A promise containing transfer details.
   */
  payoutRequestTransfer(id) {
    return this.post(`${id}/request-transfer`);
  }
}