/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class EventService extends BaseService {
  constructor() {
    super('event');
  }

  /**
   * Get event details
   * @returns A promise containing event details.
   */
  getEvent(id, occurrenceId) {
    const occ = occurrenceId ? `/occurrence/${occurrenceId}` : '';
    return this.get(`${id}${occ}`);
  }

  /**
   * Get event details
   * @returns A promise containing event details.
   */
  getEventContainer(id, data) {
    return this.get(`${id}/container`, data);
  }

  /**
   * Get eager event details
   * @returns A promise containing event details.
   */
  getEventEager(id) {
    return this.get(`${id}/eager`);
  }

  /**
   * Get events details
   * @returns A promise containing events details.
   */
  getAll(query) {
    return this.post('all', query);
  }

  /**
   * Get event rating details
   * @returns A promise containing rating details.
   */
  getEventRating(id) {
    return this.get(`${id}/rating`);
  }

  /**
   * create event details
   * @returns A promise containing event details.
   */
  createEvent(data) {
    return this.post('', data);
  }

  /**
   * start event creation
   * @returns A promise containing event details.
   */
  startEvent(data) {
    return this.post('start', data);
  }

  /**
   * start event creation
   * @returns A promise containing event details.
   */
  completeEvent(id) {
    return this.post(`${id}/complete`);
  }

  /**
   * update event details
   * @returns A promise containing updated event details.
   */
  updateEvent(id, data) {
    return this.patch(`${id}`, data);
  }

  /**
   * update event privacy
   * @returns A promise containing updated state
   */
  updateEventPrivacy(id, data) {
    return this.patch(`${id}/privacy`, data);
  }

  /**
   * update event visibility
   * @returns A promise containing updated state
   */
  updateEventVisibility(id, data) {
    return this.patch(`${id}/visibility`, data);
  }

  /**
   * delete event details
   * @returns A promise containing result.
   */
  deleteEvent(id) {
    return this.delete(`${id}`);
  }

  /**
   * update event Cover photo
   * @returns A promise containing updated event cover photo details
   */
  updateEventCoverPhoto(id, data, requestConfig = null) {
    return this.upload(`${id}/cover-photo`, data, false, requestConfig);
  }

  /**
   * Get event settings details
   * @returns A promise containing event settings details.
   */
  getEventSettings(id) {
    return this.get(`${id}/settings`);
  }

  /**
   * update event settings details
   * @returns A promise containing updated event settings details.
   */
  updateEventSettings(id, data) {
    return this.patch(`${id}/settings`, data);
  }

  // Event Occurrences

  /**
   * Get Event occurrences
   * @returns A promise containing Event occurrences.
   */
  // getEventOccurrences(id) {
  //   return this.get(`${id}/occurrence`);
  // }

  /**
   * Create Event occurrence
   * @returns A promise containing Event occurrence.
   */
  createEventOccurrence(id, data) {
    return this.post(`${id}/occurrence`, data);
  }

  /**
   * update Event occurrence
   * @returns A promise containing Event occurrence.
   */
  updateEventOccurrence(id, occurrenceId, data) {
    return this.patch(`${id}/occurrence/${occurrenceId}`, data);
  }

  /**
   * update Event occurrence
   * @returns A promise containing Event occurrence.
   */
  deleteEventOccurrence(id, occurrenceId) {
    return this.delete(`${id}/occurrence/${occurrenceId}`);
  }

  /**
   * get Event registration for occurrence
   * @returns A promise containing Event registration.
   */
  getEventRegistrationForOccurrence(id, occurrenceId) {
    return this.get(`${id}/occurrence/${occurrenceId}/registration`);
  }

  /**
   * get all Event registration
   * @returns A promise containing Event registration.
   */
  getAllEventRegistrations(id) {
    return this.get(`${id}/registration`);
  }

  /**
   * Get all the registration a user done
   * @returns A promise containing Event registration.
   */
  getAllUserEventRegistrations(data) {
    return this.get(`all-registration`, data);
  }

  /**
   * get Event registration
   * @returns A promise containing Event registration.
   */
  getEventRegistration(id, registrationId) {
    return this.get(`${id}/registration/${registrationId}`);
  }

  /**
   * delete Event registration
   * @returns A promise containing Event registration.
   */
  deleteEventRegistration(id, registrationId) {
    return this.delete(`${id}/registration/${registrationId}`);
  }

  /**
   * create Event registration for occurrence
   * @returns A promise containing Event registration.
   */
  createEventRegistration(id, occurrenceId) {
    return this.post(`${id}/occurrence/${occurrenceId}/registration`);
  }

  /**
   * Get all upcoming events
   * @returns A promise containing upcoming Events.
   */
  getAllUpcoming(data) {
    return this.post(`get-all-upcoming`, data);
  }

  /**
   * Get event accessControl details
   * @returns A promise containing event accessControl details.

   getEventAccessControl(id) {
    return this.get(`:${id}/access-control`);
  }

   /**
   * update event accessControl details
   * @returns A promise containing updated event accessControl details.

   updateEventAccessControl(id, data) {
    return this.patch(`:${id}/access-control`, data);
  }
   */

}
