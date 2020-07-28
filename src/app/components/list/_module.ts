import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from 'src/app/service';
import {MatTableModule} from '@angular/material/table';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: ListComponent }
    ])
  ],
  providers: [CompanyService],
  entryComponents: [],

})
export class ListModule {

}