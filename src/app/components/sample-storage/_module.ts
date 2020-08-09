import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { SamplestorageComponent } from './sample-storage.component';

@NgModule({
  declarations: [
    SamplestorageComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: SamplestorageComponent }
    ])
  ],
  entryComponents: [],

})
export class SamplestorageModule {

}