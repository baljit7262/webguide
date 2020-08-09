import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ControlComponent } from './control.component';

@NgModule({
  declarations: [
    ControlComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: ControlComponent }
    ])
  ],
  entryComponents: [],

})
export class ControlModule {

}