import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormValidationComponent } from './login.component';

@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FormValidationComponent]
})
export class AppModule { }