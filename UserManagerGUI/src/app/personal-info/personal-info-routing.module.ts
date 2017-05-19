import { PersonalInfoComponent } from './personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailComponent } from './personal-detail.component'

const infoRoutes: Routes = [
    // {
    //     path: 'login',
    //     component: loginComponent,
    //     outlet: 'popup'
    // },
    // {
    //     path: 'PersonalInfo',
    //     loadChildren: 'app/admin/admin.module#AdminModule',
    //     canLoad: [AuthGuard]
    // },
    // { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
    { path: 'info', component: PersonalInfoComponent, pathMatch: 'full'},
    { path: 'user/:id', component: PersonalDetailComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(infoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalInfoRoutingModule { }