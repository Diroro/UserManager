import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'personal-info',
    //   templateUrl: './personal-info.component.html',
    template: `
<div *ngIf="user">
    <h2>{{user.name}} details! </h2>
    <div>
        <label>id: </label>{{user.id}}
    </div>
    <div>
        <label>firstName: </label>
        <input [(ngModel)]="user.firstName" placeholder="First Name"/>
    </div>
    <div>
        <label>lastName: </label>
        <input [(ngModel)]="user.lastName" placeholder="Last Name"/>
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
   <!--  
    role: string;
    notes: string;
    photo: {} -->
    <button (click) = "goToUserList()">Go To User List</button>
</div>

`,
    //   styleUrls: ['./personal-info.component.css']
    styles: [`
    `]
})
export class PersonalDetailComponent implements OnInit {
    private user: User;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService,
    ) {

    }
    @Input() userId: number;

    ngOnInit() {
        this.route.params
            .switchMap((params:Params) => this.service.getUserById(+params['id']))
            .subscribe((user:User)=> this.user = user);
    }
    //      ngOnInit() {
    //     this.route.params
    //       .switchMap((params: Params) => this.service.getUser(+params['id']))
    //       .subscribe((user:User) => this.user = user);
    //   }

    goToUserList() {
        this.router.navigate(['/info']);
    }
}
