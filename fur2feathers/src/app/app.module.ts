import { BrowserModule } from '@angular/platform-browser';
import { NgModule,isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './plans/plans.component';
import { BuyersGuideComponent } from './buyers-guide/buyers-guide.component';
import { VetsComponent } from './vets/vets.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LogInComponent } from './log-in/log-in.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DataAccessService } from './data-access.service';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SubmitClaimComponent } from './submit-claim/submit-claim.component';
import { PurchaseInsuranceComponent } from './purchase-insurance/purchase-insurance.component';
import { SubmittedComponent } from './submitted/submitted.component';
const CALLBACK_PATH = '/implicit/callback';

const LOCAL_REDIRECT_URI = 'http://localhost:4200/implicit/callback';
const PROD_REDIRECT_URI = `https://fur2feathers.azurewebsites.net/implicit/callback`;

let REDIRECT_URI ="";
if(isDevMode()) {
  REDIRECT_URI = LOCAL_REDIRECT_URI; 
} else {
  REDIRECT_URI = PROD_REDIRECT_URI;
}
const config = {
  clientId: '0oaarkz7sehzUbEAk4x6',
  issuer: 'https://dev-514746.okta.com/oauth2/default',
  redirectUri: REDIRECT_URI,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    PlansComponent,
    BuyersGuideComponent,
    VetsComponent,
    FaqsComponent,
    LogInComponent,
    BlogsComponent,
    NotfoundComponent,
    SideBarComponent,
    PlanInfoComponent,
    AboutUsComponent,
    MyProfileComponent,
    SubmitClaimComponent,
    PurchaseInsuranceComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
    DataAccessService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
