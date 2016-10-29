import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {
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
