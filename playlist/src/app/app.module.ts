import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormValidationComponent } from './login.component';
import { UserplaylistComponent } from './userplaylist/userplaylist.component';
import { AppComponent } from "app/app.component";

const appRoutes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
  },
  {
    path: 'playlist',
    component: UserplaylistComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    UserplaylistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }