/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any currencies related calls.
 */
export default class CurrenciesService extends BaseService {
  constructor() {
    super('currencies');
  }

  /**
   * Get current currencies conversion rates
   * @returns A promise containing events details.
   */
  getRates() {
    return this.get('getRates');
  }

}
