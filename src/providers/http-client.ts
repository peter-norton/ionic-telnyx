import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { SecureStorage } from 'ionic-native';

@Injectable()
export class HttpClient {
  secureStorage: SecureStorage;
  user;
  token;

  constructor(private http: Http) {}

  private appendHeaders(headers: Headers) {
    if (this.user && this.token) {
      headers.append('x-api-user', this.user);
      headers.append('x-api-token', this.token);
      headers.append('Authorization', 'Token ' + this.token);
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  setHeaders(args) {
    this.user = args.user;
    this.token = args.token;

    this.secureStorage = new SecureStorage();
    this.secureStorage.create('ionic_telnyx')
      .then(
        () => {
          this.secureStorage.set('user', args.user)
            .then(
              data => console.log(data),
              error => console.log(error)
          );

          this.secureStorage.set('token', args.token)
            .then(
              data => console.log(data),
              error => console.log(error)
          );
        },
        error => console.log(error)
    );
  }

  get(url) {
    let headers = new Headers();
    this.appendHeaders(headers);
    return this.http.get(url, { headers: headers })
                    .map(this.extractData)
                    .toPromise();
  }

  post(url, data) {
    let headers = new Headers();
    this.appendHeaders(headers);
    return this.http.post(url, data, { headers: headers })
                    .map(this.extractData)
                    .toPromise();
  }

}
