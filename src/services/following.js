/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class FollowingService extends BaseService {
  constructor() {
    super('following');
  }

  /**
   * Get following details
   * @returns A promise containing following details.
   */
  getFollowing(id) {
    return this.get(`${id}`);
  }

  /**
   * Get all following details
   * @returns A promise containing following details.
   */
  getAllFollowings(data) {
    return this.get(`all`, data);
  }

  /**
   * Get follower count details
   * @returns A promise containing follower count.
   */
  getFollowersCount(data) {
    return this.get(`count`, data);
  }

  /**
   * Get following tile
   * @returns A promise containing following details.
   */
  getFollowingsTile(data) {
    return this.get(`tile`, data);
  }

  /**
   * start following creation
   * @returns A promise containing following details.
   */
  postFollowing(data) {
    return this.post('', data);
  }

  /**
   * delete following details
   * @returns A promise following result.
   */
  deleteFollowing(id) {
    return this.delete(`${id}`);
  }
}
