export default class SuccessResponse {
  success!: boolean;
  message?: string;
  static fromSuccess(success: boolean): SuccessResponse {
    const response = new SuccessResponse();
    response.success = success;
    return response;
  }
}
