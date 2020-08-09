import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { BatchprofileComponent } from './batch-profile.component';

@NgModule({
  declarations: [
    BatchprofileComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: BatchprofileComponent }
    ])
  ],
  entryComponents: [],

})
export class BatchprofileModule {

}