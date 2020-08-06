import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [
    OrderComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: OrderComponent }
    ])
  ],

})
export class OrderModule {

}