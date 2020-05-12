import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { VetsComponent } from './vets/vets.component';
import { PlansComponent } from './plans/plans.component';
import { BuyersGuideComponent } from './buyers-guide/buyers-guide.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SubmitClaimComponent } from './submit-claim/submit-claim.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PurchaseInsuranceComponent } from './purchase-insurance/purchase-insurance.component';
import { SubmittedComponent } from './submitted/submitted.component'
import { OktaCallbackComponent, OktaAuthGuard, OktaAuthService } from '@okta/okta-angular';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes : Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'vets', component: UnderConstructionComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'buyers-guide', component: BuyersGuideComponent },
  { path: 'blogs', component: UnderConstructionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'submit-claim', component: UnderConstructionComponent},
  { path: 'my-profile', component: MyProfileComponent,canActivate: [OktaAuthGuard] },
  { path: 'purchase-insurance', component: PurchaseInsuranceComponent },
  { path: 'submitted', component: SubmittedComponent},
  { path: 'implicit/callback', component:OktaCallbackComponent },
  { path: '**', component: NotfoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
