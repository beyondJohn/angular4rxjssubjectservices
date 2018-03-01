import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  isLoginSubject = new BehaviorSubject<object>(this.hasToken());

  myobject: object = { text: 'hello' };

  login(message): void {
    
    this.isLoginSubject.next(message);
  }

  private hasToken(): object {
    return this.myobject;
  }

}
