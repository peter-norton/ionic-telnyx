import { Injectable } from '@angular/core';
import { HttpClient } from './http-client';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {
  }

  login(args) {
    /**
     * Calls the login endpoint with the supplied credentials
     * @param {object} args Contains all the required fields
     * @param {string} args.email User's email/username
     * @param {string} args.password User's password
     */

    return this.httpClient.post("https://api.telnyx.com/sessions", args)
      .then(
        response => {
          this.httpClient.setHeaders({
            user: response.credentials.api_user,
            token: response.credentials.api_token
          });

          return response;
        },
        error => {
          console.log(error);
        });
  }
}
