/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class WorkshopService extends BaseService {
  constructor() {
    super('workshop');
  }

  /**
   * Get workshop details
   * @returns A promise containing workshop details.
   */
  getWorkshop(id) {
    return this.get(`${id}`);
  }

  /**
   * Get workshop details
   * @returns A promise containing workshop details.
   */
  getWorkshopContainer(id, data) {
    return this.get(`${id}/container`, data);
  }

  /**
   * Get eager workshop details
   * @returns A promise containing workshop details.
   */
  getWorkshopEager(id) {
    return this.get(`${id}/eager`);
  }

  /**
   * Get workshops details
   * @returns A promise containing workshops details.
   */
  getAll(query) {
    return this.post('all', query);
  }

  /**
   * Get workshop rating details
   * @returns A promise containing rating details.
   */
  getWorkshopRating(id) {
    return this.get(`${id}/rating`);
  }

  /**
   * create workshop details
   * @returns A promise containing workshop details.
   */
  createWorkshop(data) {
    return this.post('', data);
  }

  /**
   * start workshop creation
   * @returns A promise containing workshop details.
   */
  startWorkshop(data) {
    return this.post('start', data);
  }

  /**
   * start workshop creation
   * @returns A promise containing workshop details.
   */
  completeWorkshop(id) {
    return this.post(`${id}/complete`);
  }

  /**
   * update workshop details
   * @returns A promise containing updated workshop details.
   */
  updateWorkshop(id, data) {
    return this.patch(`${id}`, data);
  }

  /**
   * update workshop privacy
   * @returns A promise containing updated state
   */
  updateWorkshopPrivacy(id, data) {
    return this.patch(`${id}/privacy`, data);
  }

  /**
   * update workshop visibility
   * @returns A promise containing updated state
   */
  updateWorkshopVisibility(id, data) {
    return this.patch(`${id}/visibility`, data);
  }

  /**
   * delete workshop details
   * @returns A promise containing result.
   */
  deleteWorkshop(id) {
    return this.delete(`${id}`);
  }

  /**
   * update workshop Cover photo
   * @returns A promise containing updated workshop cover photo details
   */
  updateWorkshopCoverPhoto(id, data, requestConfig = null) {
    return this.upload(`${id}/cover-photo`, data, false, requestConfig);
  }

  /**
   * Get workshop settings details
   * @returns A promise containing workshop settings details.
   */
  getWorkshopSettings(id) {
    return this.get(`${id}/settings`);
  }

  /**
   * update workshop settings details
   * @returns A promise containing updated workshop settings details.
   */
  updateWorkshopSettings(id, data) {
    return this.patch(`${id}/settings`, data);
  }

  // Workshop Occurrences

  /**
   * Get Workshop occurrences
   * @returns A promise containing Workshop occurrences.
   */
  getWorkshopOccurrences(id) {
    return this.get(`${id}/occurrence`);
  }

  /**
   * Create Workshop occurrence
   * @returns A promise containing Workshop occurrence.
   */
  createWorkshopOccurrence(id, data) {
    return this.post(`${id}/occurrence`, data);
  }

  /**
   * update Workshop occurrence
   * @returns A promise containing Workshop occurrence.
   */
  updateWorkshopOccurrence(id, occurrenceId, data) {
    return this.patch(`${id}/occurrence/${occurrenceId}`, data);
  }

  /**
   * update Workshop occurrence
   * @returns A promise containing Workshop occurrence.
   */
  deleteWorkshopOccurrence(id, occurrenceId) {
    return this.delete(`${id}/occurrence/${occurrenceId}`);
  }

  /**
   * Get all the registration a user done
   * @returns A promise containing workshop registration.
   */
  getAllUserWorkshopRegistrations() {
    return this.get(`all-registration`);
  }

  /**
   * get all registrations for a workshop
   * @returns A promise containing Workshop registration.
   */
  getAllWorkshopRegistrations(id) {
    return this.get(`${id}/registration`);
  }

  /**
   * create Workshop registration
   * @returns A promise containing Workshop registration.
   */
  createWorkshopRegistration(id) {
    return this.post(`${id}/registration`);
  }

  /**
   * get Workshop registration
   * @returns A promise containing Workshop registration.
   */
  getWorkshopRegistration(id, registrationId) {
    return this.get(`${id}/registration/${registrationId}`);
  }

  /**
   * delete Workshop registration
   * @returns A promise containing Workshop registration.
   */
  deleteWorkshopRegistration(id, registrationId) {
    return this.delete(`${id}/registration/${registrationId}`);
  }

  /**
   * Get all upcoming workshops
   * @returns A promise containing upcoming workshops.
   */
  getAllUpcoming(data) {
    return this.post(`get-all-upcoming`, data);
  }

  /**
   * Get workshop accessControl details
   * @returns A promise containing workshop accessControl details.

   getWorkshopAccessControl(id) {
    return this.get(`:${id}/access-control`);
  }

   /**
   * update workshop accessControl details
   * @returns A promise containing updated workshop accessControl details.

   updateWorkshopAccessControl(id, data) {
    return this.patch(`:${id}/access-control`, data);
  }
   */

}
