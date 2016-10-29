import { Injectable } from '@angular/core';
import { HttpClient } from './http-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient) {}

  pollCallStats() {
    return Observable
      .interval(3000)
      .flatMap(() => {
        return this.getCallStats();
      });
  }

  getCallStats() {
    return this.httpClient.get('https://api-gateway.telnyx.com/call_stats').then(
      data => data
    );
  }

}
