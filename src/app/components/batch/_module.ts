import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { BatchComponent } from './batch.component';

@NgModule({
  declarations: [
    BatchComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: BatchComponent }
    ])
  ],
  entryComponents: [],

})
export class BatchModule {

}