/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class ChannelService extends BaseService {
  constructor() {
    super('channel');
  }

  /**
   * Get channel user info details
   * @returns A promise containing channel user info details.
   */
  getChannel(id) {
    return this.get(`${id}`);
  }

}
