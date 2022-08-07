import { Injectable } from '@angular/core';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUsers():Users[]{
    return [
      {'name':'Harry Potter','age':25},
      {'name':'Hermione Granger','age':24},
      {'name':'Ron Weasley','age':23},
    ]
  }
}
