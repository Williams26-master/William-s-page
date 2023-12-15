import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    
  ],

  imports: [
    NavbarComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

    providers: [],
  
})
export class AppModule { }
