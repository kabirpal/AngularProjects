import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MirrorService {
  //mirrorText = new Subject<string>();
  mirrorText = new BehaviorSubject<string>('Mirror World!');
  constructor() { }
}
