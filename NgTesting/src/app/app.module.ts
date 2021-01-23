import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { AppnavbarComponent } from './components/appnavbar/appnavbar.component';
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    VerifyemailComponent,
    DashboardComponent,
    ForgotpassComponent,
    AppnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
