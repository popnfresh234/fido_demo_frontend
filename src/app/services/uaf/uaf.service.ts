import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { QRCodeResponse } from 'src/app/models/responses/qrcode/qr-code-response';
import { ValidateQRCodeRes } from 'src/app/models/responses/validate-qr-code/validate-qr-code-res';
import { ValidateQRCodeReq } from 'src/app/models/requests/validate-qr-code/validate-qr-code-req';
import { LoginRequest } from 'src/app/models/requests/login-request';
import { LoginResponse } from 'src/app/models/responses/login-response';
@Injectable({
  providedIn: 'root',
})
export class UafService {
  base_url = environment.apiUrl + '/uaf';
  AppID: string =
    'https://demo-frontend-alex-demo.apps.oc.webcomm.com.tw/api/uaf/facets';
  constructor(private http: HttpClient) {}

  requestQRCode() {
    return this.http.post<QRCodeResponse>(
      this.base_url + '/qrcode/requestQrCode',
      {
        body: {
          appId: this.AppID,
        },
      }
    );
  }

  validateQRCode(req: ValidateQRCodeReq) {
    return this.http.post<ValidateQRCodeRes>(
      this.base_url + '/qrcode/validateQrCode',
      req
    );
  }

  qrCodeLogin(req: LoginRequest) {
    return this.http.post<LoginResponse>(this.base_url + '/qrcode/login', req);
  }
}
