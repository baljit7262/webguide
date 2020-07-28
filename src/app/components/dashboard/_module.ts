import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from 'src/app/service';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ],
  providers: [CompanyService],
  entryComponents: [],

})
export class DashboardModule {

}