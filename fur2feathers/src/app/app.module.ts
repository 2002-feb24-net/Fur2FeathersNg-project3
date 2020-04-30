import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [
    DataAccessService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
