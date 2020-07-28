import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from 'src/app/service';
import {MatTableModule} from '@angular/material/table';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [
    ReportComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: ReportComponent }
    ])
  ],
  providers: [CompanyService],
  entryComponents: [],

})
export class ReportModule {

}