import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { PatientComponent } from './patient.component';

@NgModule({
  declarations: [
    PatientComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: PatientComponent }
    ])
  ],

})
export class PatientModule {

}