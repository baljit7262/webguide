import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { CompanyService } from 'src/app/service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    SampleComponent,
  ],

  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: SampleComponent }
    ])
  ],
  providers: [CompanyService],
  entryComponents: [],

})
export class SampleModule {

}