import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import routing Module
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './views/error/error.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
