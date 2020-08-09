import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent,

  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: TestComponent }
    ])
  ],
  entryComponents: [],

})
export class TestModule {

}