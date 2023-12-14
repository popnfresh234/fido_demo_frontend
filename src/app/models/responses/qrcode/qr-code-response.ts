import { QRCodeBody } from './qr-code-body';
import { RestResponseHeader } from '../rest-response-header';

export interface QRCodeResponse {
  header: RestResponseHeader;
  body: QRCodeBody;
}
