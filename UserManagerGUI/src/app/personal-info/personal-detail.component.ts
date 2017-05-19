import { ExtendedUser } from './../user.model.1';
import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'personal-info',
    //   templateUrl: './personal-info.component.html',
    //     template: `
    //     <div>
    //         <div *ngFor="let attr of keys(user)"
    //      >

    //              <label>{{attr}}: </label> 
    //               <input [(ngModel)]="user[attr]" placeholder="First Name"/>

    //         </div>
    //  <button (click) = "goToUserList()">Go To User List</button>

    // </div>
    // `,

    template: `
   <div *ngIf=user>
        <h2>{{user.first_name}} details! </h2>
    
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
      
       
    </div>
 <button (click) = "goToUserList()">Go To User List</button>

`,

    //   styleUrls: ['./personal-info.component.css']
    styles: [`
    `],
    providers: [UserService]
})
export class PersonalDetailComponent implements OnInit {
    private user: ExtendedUser;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService,
    ) {

    }
    @Input() userId: number;

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getUserById(+params['id']))
            .subscribe(user => {
                console.log(user);
                this.user = user;
            });

    }
    //      ngOnInit() {
    //     this.route.params
    //       .switchMap((params: Params) => this.service.getUser(+params['id']))
    //       .subscribe((user:User) => this.user = user);
    //   }

    goToUserList() {
        this.router.navigate(['/info']);
    }

    keys(obj: Object): Array<string> {
        return Object.keys(obj);
    }
}
