import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { LocationComponent } from './location.component';

@NgModule({
  declarations: [
    LocationComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: LocationComponent }
    ])
  ],
  entryComponents: [],

})
export class LocationModule {

}