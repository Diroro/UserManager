import { ExtendedUser } from './../user.model.1';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'personal-info',
    template: `
    <h2>PERSONAL INFO</h2>
    <button class = 'usual-btn'
        (click)="openInfo(0)">
        Open Info 0
    </button>
     <button class = 'usual-btn'
        (click)="openInfo(1)">
        Open Info 1
    </button>
    <button class = 'usual-btn'
        (click)="openInfo(2)">
        Open Info 2
    </button>
    <button class = 'usual-btn'
        (click)="getUsers()">
        Get All Users
    </button>
    <div *ngFor="let user of users">
    <div *ngIf=user>
    
    <h2>{{user.first_name}} details! </h2>
         <button class = 'usual-btn'
        (click)="openInfo(user._id)">
        Open Info 2
    </button>
        <div>
            <label>id: </label>{{user._id}}
        </div>
        <div>
            <label>firstName: </label>
            <input [(ngModel)]="user.first_name" placeholder="First Name"/>
        </div>
        <div>
            <label>lastName: </label>
            <input [(ngModel)]="user.last_name" placeholder="Last Name"/>
        </div>
        <div>
            <label>birthday: </label>
            <input [(ngModel)]="user.birthday" placeholder="birthday"/>
        </div>
        <div>
            <label>Position: </label>
            <input [(ngModel)]="user.position" placeholder="Position"/>
        </div>
        <div>
            <label>Team: </label>
            <input [(ngModel)]="user.team" placeholder="Team"/>
        </div>
        <div>
            <label>Project: </label>
            <input [(ngModel)]="user.project" placeholder="Project"/>
        </div>
         <div>
            <label>Teamlead: </label>
            <input [(ngModel)]="user.teamlead" placeholder="Teamlead"/>
        </div>
      
       
    </div></div>
    
    
  `,
    providers: [UserService]
    //   templateUrl: './personal-info.component.html',
    //   styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {


    private currentUserId = 0;
    private currentUser: Object;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userSerivce: UserService
    ) {

    }
    //  users: Observable<User[]>;
    users: ExtendedUser[];
    ngOnInit() {
        // this.currentUser = {
        //     id: 0,
        //     name: 'DIRO'
        // }
    }

    getUsers() {
        this.userSerivce.getAllUsers()
            .then(users => this.users = users);
    }


    openInfo(userId): void {
        this.router.navigate(['/user', userId]);
    }
}
