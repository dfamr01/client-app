/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class ZoomService extends BaseService {
  constructor() {
    super('zoom');
  }

  /**
   * retrieve signature for getting in
   * @returns A promise containing signature details.
   */
  signature(data) {
    return this.post('signature', data);
  }

  /**
   * retrieve User zoom access token
   * @returns A promise containing ZAK details.
   */
  getUserZak() {
    return this.get('user-zak');
  }

  /**
   * authenticate zoom user
   * @returns A promise containing signature details.
   */
  authZoomUser(data) {
    return this.post('auth-zoom-user', data);
  }

  /**
   * refresh zoom user token
   * @returns A promise containing signature details.
   */
  refreshZoomUserToken() {
    return this.post('refresh-zoom-user-token');
  }

  /**
   * create zoom meeting
   * @returns A promise containing zoom meeting details.
   */
  postMeeting(data) {
    return this.post('meeting', data);
  }

  /**
   * Get zoom meeting details
   * @returns A promise containing zoom meeting details.
   */
  getMeeting(meetingId) {
    return this.get(`meeting/${meetingId}`);
  }

  /**
   * update zoom meeting details
   * @returns A promise containing zoom meeting details.
   */
  updateMeeting(meetingId, data) {
    return this.patch(`meeting/${meetingId}`, data);
  }

  /**
   * delete zoom meeting details
   * @returns A promise containing zoom meeting details.
   */
  deleteMeeting(meetingId) {
    return this.delete(`meeting/${meetingId}`);
  }
}
