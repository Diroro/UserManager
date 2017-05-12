import { Injectable } from '@angular/core';
import { USERS } from './mock.users';




let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {
    getUsersByTeam(team: string) {
        return usersPromise.then(users => {
            let filteredUsers = [];
            users.forEach(user => {
                user.team === team ? filteredUsers.push(user) : {};
            });
            return filteredUsers;
        })
    }

    getUserById(id: number | string) {
        return usersPromise
            .then(users => users.find(user => user.id === +id));
    }
}