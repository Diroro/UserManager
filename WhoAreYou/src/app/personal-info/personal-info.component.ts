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
        (click)="openInfo(3)">
        Open Info 3
    </button>
    
  `,
    //   templateUrl: './personal-info.component.html',
    //   styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
    private currentUserId = 0;
    private currentUser: Object;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.currentUser = {
            id: 0,
            name: 'DIRO'
        }
    }

    openInfo(userId): void {
        this.router.navigate(['/user', userId]);
    }
}
