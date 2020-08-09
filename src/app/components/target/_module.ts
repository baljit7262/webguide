import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TargetComponent } from './target.component';

@NgModule({
  declarations: [
    TargetComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: TargetComponent }
    ])
  ],
  entryComponents: [],

})
export class TargetModule {

}