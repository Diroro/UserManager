import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Router</h1>
    <nav>
    <a routerLink="/info" routerLinkActive="active">User Info</a>
    </nav>
    <router-outlet></router-outlet>
  `,
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
