import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormValidationComponent } from './register/login.component';
import { UserplaylistComponent } from './userplaylist/userplaylist.component';
import { AppComponent } from "app/app.component";
import { YoutubeapiComponent } from './youtubeapi/youtubeapi.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
  },
  {
    path: 'playlist',
    component: UserplaylistComponent,
  },
  {
    path: 'youtubeapi',
    component: YoutubeapiComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    UserplaylistComponent,
    YoutubeapiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }