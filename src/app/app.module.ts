import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Page2 } from '../pages/page2/page2';

import { HttpClient } from '../providers/http-client';
import { LoginService } from '../providers/login-service';
import { DashboardService } from '../providers/dashboard-service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b351e921'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Login,
    Dashboard,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Dashboard,
    Page2
  ],
  providers: [
    HttpClient,
    LoginService,
    DashboardService
  ]
})
export class AppModule {}
