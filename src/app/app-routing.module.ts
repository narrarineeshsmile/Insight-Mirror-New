import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FAQComponent } from './faq/faq.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlansComponent } from './plans/plans.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { TermsConditonsComponent } from './terms-conditons/terms-conditons.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'plans&pricing', component: PlansComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent
  },
  { path: 'faq', component: FAQComponent },
  { path: 'request', component: RequestDemoComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'privacy', component: PrivacyPoliciesComponent },
  { path: 'terms', component: TermsConditonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
