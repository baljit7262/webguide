import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: UserComponent }
    ])
  ],

})
export class UserModule {

}