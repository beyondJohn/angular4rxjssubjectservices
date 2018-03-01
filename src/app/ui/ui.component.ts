import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {

  constructor(private _auth: AuthService) { }
  report() {
    if (typeof this._auth.isLoginSubject['value'] == 'object') {
      return "awesome " + this._auth.isLoginSubject['value']['text'];
      //return "Logged In";
    }
    else {
      return "Logged Out";
    }
  }

  btnclick() {

    console.log(this._auth.isLoginSubject['_value']);
  }
  btnclicklogin() {
    console.log('bumpkin');
    this._auth.login({ text: 'hey there' });
  }
  btnclicklogout() {

    console.log('logout');
  }
}
