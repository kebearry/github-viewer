import { GithubService } from './../../services/github.service';
import { CardComponent } from './../../components/card/card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
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
  providers: [GithubService]
})

export class HomeModule { }