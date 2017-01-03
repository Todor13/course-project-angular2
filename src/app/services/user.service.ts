import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { AuthHeaders } from '../common/auth-headers';
import { ContentHeaders } from '../common/headers';

const Domain="http://localhost:3000";
const RegisterUrl="/register";
const GetUsers="/users/";

@Injectable()
export class UserService {

    constructor(private http: Http){
    }

    register(user: User): Observable<any>{
        return this.http.post(`${Domain}${RegisterUrl}`, JSON.stringify(user), {headers: ContentHeaders})
            .map((response: Response) => response.json());
    }

    getAllUsers(params: any): Observable<any>{
        return this.http.get(`${Domain}${GetUsers}`, {headers: AuthHeaders, search: params})
          .map((response: Response) => response.json());
    }

    getUserById(id: string): Observable<any>{
        return this.http.get(`${Domain}${GetUsers}${id}`, {headers: ContentHeaders})
          .map((response: Response) => response.json());
    }

    updateUser(user: User, id: string): Observable<any> {
        return this.http.post(`${Domain}${GetUsers}${id}`, JSON.stringify(user), {headers: ContentHeaders})
          .map((response: Response) => response.json());
    }

}