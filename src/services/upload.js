/* eslint-disable import/prefer-default-export */
import { BaseService } from './base';

/**
 * Service used for any user related calls.
 */
export default class UploadService extends BaseService {
  constructor() {
    super('upload');
  }

  /**
   * Get upload
   * @returns A promise containing upload
   */
  uploadGet(id) {
    return this.get(id);
  }

  /**
   * post upload
   * @returns A promise containing upload
   */
  uploadPost(data) {
    return this.post('', data);
  }

  /**
   * patch upload
   * @returns A promise containing upload
   */
  uploadPatch(id, data) {
    return this.patch(id, data);
  }

  /**
   * delete upload
   * @returns A promise containing object with success boolean
   */
  uploadDelete(id) {
    return this.delete(id);
  }

  /**
   * Get event video
   * @returns A promise containing event video.
   */
  getUploadSignedUrl(id) {
    return this.get(`${id}/signed-url`);
  }

  /**
   * upload event video
   * @returns A promise containing event video.
   */
  uploadVideo(data, config) {
    let headers = { 'Content-Type': 'multipart/form-data' };
    return this.post('video', data, false, config, headers);
  }

  /**
   * Upload chunked video start
   * @returns A promise containing object with multi-part id.
   */
  uploadChunkedVideoStart(data) {
    return this.post('chunked/video/start', data);
  }

  /**
   * check if chunked video started
   * @returns A promise containing boolean
   */
  uploadChunkedVideoStarted(data) {
    return this.get('chunked/video/started', data);
  }

  /**
   * Upload chunked video abort
   * @returns A promise containing confirmation of abort operation
   */
  uploadChunkedVideoAbort(data) {
    return this.post('chunked/video/abort', data);
  }
}
