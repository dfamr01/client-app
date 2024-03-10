/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class AdminService extends BaseService {
  constructor() {
    super('admin');
  }

  //// Events
  /**
   * Get all events
   * @returns A promise containing events details.
   */
  getAllEvents(data) {
    return this.get(`all-events`, data);
  }

  /**
   * Get event
   * @returns A promise containing event details.
   */
  getEvent(id) {
    return this.get(`event/${id}`);
  }

  /**
   * Update event
   * @returns A promise containing event details.
   */
  updateEvent(id, data) {
    return this.update(`event/${id}`, data);
  }

  /**
   * Delete event
   * @returns A promise containing event details.
   */
  deleteEvent(id) {
    return this.delete(`event/${id}`);
  }

  //// Payouts
  /**
   * Get all payouts
   * @returns A promise containing payouts details.
   */
  getAllPayouts(data) {
    return this.get(`all-payouts`, data);
  }

  /**
   * Get payout
   * @returns A promise containing payout details.
   */
  getPayout(id) {
    return this.get(`payout/${id}`);
  }

  /**
   * Update payout
   * @returns A promise containing payout details.
   */
  updatePayout(id, data) {
    return this.update(`payout/${id}`, data);
  }

  /**
   * Delete payout
   * @returns A promise containing payout details.
   */
  deletePayout(id) {
    return this.delete(`payout/${id}`);
  }

  /**
   * start payout funds transfer
   * @returns A promise containing transfer details.
   */
  payoutStartTransfer(id) {
    return this.post(`payout/${id}/start-transfer`);
  }

  //// Users
  /**
   * Get all users
   * @returns A promise containing users details.
   */
  getAllUsers(data) {
    return this.get(`all-users`, data);
  }

  /**
   * Get user
   * @returns A promise containing user details.
   */
  getUser(id) {
    return this.get(`user/${id}`);
  }

  /**
   * Update user
   * @returns A promise containing user details.
   */
  updateUser(id, data) {
    return this.update(`user/${id}`, data);
  }

  /**
   * Delete user
   * @returns A promise containing user details.
   */
  deleteUser(id) {
    return this.delete(`user/${id}`);
  }

  //// Workshops
  /**
   * Get all workshop
   * @returns A promise containing workshop details.
   */
  getAllWorkshops(data) {
    return this.get(`all-workshops`, data);
  }

  /**
   * Get workshop
   * @returns A promise containing workshop details.
   */
  getWorkshop(id) {
    return this.get(`workshop/${id}`);
  }

  /**
   * Update workshop
   * @returns A promise containing workshop details.
   */
  updateWorkshop(id, data) {
    return this.update(`workshop/${id}`, data);
  }

  /**
   * Delete workshop
   * @returns A promise containing workshop details.
   */
  deleteWorkshop(id) {
    return this.delete(`workshop/${id}`);
  }
}