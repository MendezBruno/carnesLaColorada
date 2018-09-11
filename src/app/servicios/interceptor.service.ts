import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {  } from 'rxjs';


@Injectable()
export class interceptorBackendServiceResponse implements HttpInterceptor {


    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('pase por el interceptor', req)
        return next.handle(req)
    }

}

class SpinnerInterface {
    bool: boolean;
    servicio: string
}