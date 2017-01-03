import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ContentHeaders } from '../common/headers';
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'

const Domain="http://localhost:3000";
const LoginUrl="/login";

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${Domain}${LoginUrl}`, JSON.stringify({ username: username, password: password }), { headers: ContentHeaders})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                if (!response.json().error) {
                    let token = response.json() && response.json().result.token;
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: response.json().result.username, id: response.json().result.id, token: token }));

                    // return true to indicate successful login
                    return response.json();
                }else {
                    return response.json();
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['home']);
    }
}