import { InterceptorService } from './../../services/interceptor.service';
import { GithubService } from './../../services/github.service';
import { CardComponent } from './../../components/card/card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports:[
      HttpClientModule,
      HomeRoutingModule,
      CommonModule,
      FormsModule
  ],
  declarations: [HomeComponent, CardComponent ],
  providers: [GithubService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService,
    multi: true}]
})

export class HomeModule { }