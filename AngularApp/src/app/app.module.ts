import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './register/home/home.component';
import { EmailComponent } from './register/email/email.component';
import { UsernameComponent } from './register/username/username.component';
import { RegisterComponent } from './register/register.component';





const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'username',
    component: UsernameComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailComponent,
    UsernameComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
