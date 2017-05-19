import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PersonalInfoComponent }    from './personal-info.component';
import { PersonalDetailComponent }    from './personal-detail.component';


import { PersonalInfoRoutingModule } from './personal-info-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonalInfoRoutingModule
  ],
  declarations: [
    PersonalInfoComponent,
    PersonalDetailComponent
  
  ],
  providers: [  ]
})
export class PersonalInfoModule {}