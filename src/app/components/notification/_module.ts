import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from 'src/app/service';
import {MatTableModule} from '@angular/material/table';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: NotificationComponent }
    ])
  ],
  providers: [CompanyService],
  entryComponents: [],

})
export class NotifModule {

}