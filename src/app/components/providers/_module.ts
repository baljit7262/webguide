import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ProviderComponent } from './provider.component';

@NgModule({
  declarations: [
    ProviderComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: ProviderComponent }
    ])
  ],
  entryComponents: [],

})
export class ProviderModule {

}