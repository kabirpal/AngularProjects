import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObUsers } from './obUsers';

@Injectable({
  providedIn: 'root'
})
export class ObServiceService {

  private user_url:string = "./assets/student.json";

  constructor(private http:HttpClient) { }

  getUsers():Observable<ObUsers[]>{
    return this.http.get<ObUsers[]>(this.user_url);
  }
}
