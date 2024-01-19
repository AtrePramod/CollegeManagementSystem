// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { ContactrootComponent } from './contactroot/contactroot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactrootComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
   
  bootstrap: [AppComponent],
})
export class AppModule { }
