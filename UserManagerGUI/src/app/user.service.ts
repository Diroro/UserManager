import { ExtendedUser } from './user.model.1';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { USERS } from './mock.users';

import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const usersUrl = 'http://localhost:4044/users'
let usersPromise = Promise.resolve(USERS);
@Injectable()


export class UserService {
    private static isAllUsersLoaded: number = 0;
    private static Users: Promise<any>;

    constructor(private http: Http) { }

    findObjectInArray(arr, param, value) {
        ;
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            if (element[param] == value) return element;
        }

    }
    getUserById(id: number) {
        return this.getAllUsers().then(users =>
            this.findObjectInArray(users, 'id', id)
        )
    }

     editUser(id: number, user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(usersUrl+'/'+id, user, options)
            .toPromise()
            .then((response: any) => response.json() as ExtendedUser[])
            .catch(this.handleError);

    }
    addUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(usersUrl, user, options)
            .toPromise()
            .then((response: any) => response.json() as ExtendedUser[])
            .catch(this.handleError);

    }

    getUsersFromServer(): Promise<any> {
        return this.http
            .get(usersUrl)
            .toPromise()
            .then((response: any) => response.json() as ExtendedUser[])    //todo USE {} instead of []
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getAllUsers(): Promise<any> {
        if (!UserService.isAllUsersLoaded) {
            UserService.Users = this.getUsersFromServer();
            console.log('Users have been loaded successfully.');
            UserService.isAllUsersLoaded = 1;
            return UserService.Users;
        } else {
            console.log('Users have been already loaded.');
            return UserService.Users;
        }
    }

}