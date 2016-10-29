import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardService } from '../../providers/dashboard-service'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  callStats = {inbound: null, outbound: null};
  callStatsPoll;
  loadingCallStats = true;

  constructor(
    public navCtrl: NavController,
    private dashboardService: DashboardService
  ) {}

  ionViewDidLoad() {
    this.callStatsPoll = this.dashboardService.pollCallStats()
      .subscribe(
        data => {
          this.loadingCallStats = false;
          this.callStats = data;
        }
      );
  }

  ionViewDidLeave() {
    this.callStatsPoll.unsubscribe();
  }

}
