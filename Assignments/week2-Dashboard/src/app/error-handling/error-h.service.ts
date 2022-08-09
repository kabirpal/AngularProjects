import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EhUsers } from './EhUsers';
import { throwError as observableThrowError } from 'rxjs'
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ErrorHService {
  private user_url:string = "./assets/student1.json";

  constructor(private http:HttpClient) { }

  getUsers():Observable<EhUsers[]>{
    return this.http.get<EhUsers[]>(this.user_url).pipe(catchError(this.errorHandler));
    
  }
  errorHandler(error:HttpErrorResponse){
    return observableThrowError(error.message || "Server Error")}
}
