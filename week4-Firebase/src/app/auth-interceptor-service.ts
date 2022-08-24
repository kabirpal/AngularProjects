import { HttpHandler, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log("Request is on it's way!")
        //Adding a new header to the existing one. This is a example of how to manipulate Request objects
        const modifiedHeader = req.clone({
            headers:req.headers.append('Auth','abcd')
        })
        return next.handle(modifiedHeader)
    }
}