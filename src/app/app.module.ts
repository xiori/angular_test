import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { ArticlesInputComponent } from './articles/articles-input.component';
import { personnesInputComponent } from './personnes/personnes-input.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PersonnesComponent,
    ArticlesInputComponent,
    personnesInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
