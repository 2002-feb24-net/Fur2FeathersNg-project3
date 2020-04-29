import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { VetsComponent } from './vets/vets.component';
import { PlansComponent } from './plans/plans.component';
import { BuyersGuideComponent } from './buyers-guide/buyers-guide.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login-in', component: LogInComponent },
  { path: 'vets', component: VetsComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'buyers-guide', component: BuyersGuideComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
