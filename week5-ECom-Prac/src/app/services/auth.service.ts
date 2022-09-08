import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user-shop/login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User|null>(null);
  constructor() { }
}
