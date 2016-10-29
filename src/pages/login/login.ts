import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';

import { LoginService } from '../../providers/login-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  email;
  password;

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService
  ) {}

  login() {
    this.loginService.login({email: this.email, password: this.password})
      .then(
        () => {
          this.navCtrl.setRoot(Dashboard);
        }
      );
  }
}
