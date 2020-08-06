import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [
    InventoryComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: InventoryComponent }
    ])
  ],
  entryComponents: [],

})
export class InventoryModule {

}