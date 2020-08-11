import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHttpClient, CompanyService, StorageService, GlobalsX} from './service';
import { MasterComponent } from './layout/master/master.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [AppConfig, CustomHttpClient,GlobalsX, CompanyService, StorageService, {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }]
,
  
  bootstrap: [AppComponent]
})
export class AppModule { }

