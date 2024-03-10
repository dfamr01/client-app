/* eslint-disable import/prefer-default-export */
import {BaseService} from './base';

/**
 * Service used for any user related calls.
 */
export default class FavoriteService extends BaseService {
  constructor() {
    super('favorite');
  }

  /**
   * Get favorite details
   * @returns A promise containing favorite details.
   */
  getFavorite(id) {
    return this.get(`${id}`);
  }

  /**
   * Get all favorite details
   * @returns A promise containing favorite details.
   */
  getAllFavorites(data) {
    return this.get(`all`, data);
  }

  /**
   * Get all favorite tiles
   * @returns A promise containing favorite tiles.
   */
  getFavoriteTile(data) {
    return this.get('tile', data);
  }

  /**
   * Get favorite tile
   * @returns A promise containing favorite details.
   */
  getFavoritesTile(data) {
    return this.get(`tile`, data);
  }

  /**
   * start favorite creation
   * @returns A promise containing favorite details.
   */
  postFavorite(data) {
    return this.post('', data);
  }

  /**
   * delete favorite details
   * @returns A promise favorite result.
   */
  deleteFavorite(id) {
    return this.delete(`${id}`);
  }
}
