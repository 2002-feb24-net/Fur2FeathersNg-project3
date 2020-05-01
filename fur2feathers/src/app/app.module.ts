import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

const config = {
  clientId: '0oaarkz7sehzUbEAk4x6',
  issuer: 'https://https://dev-514746.okta.com/oauth2/default',
  redirectUri: 'http://localhost:8080/implicit/callback',
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
    PlanInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    FormsModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
    DataAccessService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
