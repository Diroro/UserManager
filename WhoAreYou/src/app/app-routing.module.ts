import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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
    { path: '', redirectTo: '/info', pathMatch: 'full' },

    // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [
         RouterModule.forRoot(appRoutes)
    ],
    exports: [
         RouterModule
    ],
    providers: [
        // CanDeactivateGuard
    ]
})
export class AppRoutingModule { }