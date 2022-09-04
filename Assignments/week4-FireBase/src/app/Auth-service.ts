import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:number,
    localId:string,
    registered ?:boolean
}

@Injectable({providedIn:'root'})

export class AuthService{
    createUrlTree(arg0: string[]): any {
        throw new Error("Method not implemented.");
    }
    constructor(private http:HttpClient){}

    user = new Subject<User>();

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHBwDVScOTM-BS6sffi1c2_deUaQDAd20',
        {email:email,
        password:password,
        returnSecureToken:true}
        )
        .pipe(catchError(this.handleError), tap(resData =>{ //tap is a operator that allows us to perform an action without changing its response.
            const expirationDate = new Date(new Date().getTime()+ +resData.expiresIn * 1000)
            const user = new User(resData.email,resData.localId,resData.idToken,expirationDate);
            this.user.next(user);
        }))
    }

    login(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHBwDVScOTM-BS6sffi1c2_deUaQDAd20',
        {email:email,
            password:password,
            returnSecureToken:true}
            ) 
            .pipe(catchError(this.handleError),tap(resData=>{
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
            }))
    }

    logout(){
        
        this.user.unsubscribe();  
    }

    private handleAuthentication(email:string, userId:string, 
        token : string, expiresIn:number){
            const expirationDate = new Date(new Date().getTime()+ +expiresIn * 1000)
            const user = new User(email,userId,token,expirationDate);
            this.user.next(user);
        }

    private handleError(errorRes:HttpErrorResponse){
        let errorMessage='An unknown error occured';
            if(!errorRes.error||!errorRes.error.error){
                return throwError(() => new Error(errorMessage));
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage='Email already exists';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage='Email not found';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage='Incorrect password'
                    break;
            }
            return throwError(()=>new Error(errorMessage))
    }
}