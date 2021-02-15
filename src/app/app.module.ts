import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Illustration1Component } from './shared/illustration1';
import { Illustration2Component } from './shared/illustration2';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { TickComponent } from './shared/greentick';
import { Illustration3Component } from './shared/illustration3';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './shared/pricing';
import { PlansComponent } from './plans/plans.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { TermsConditonsComponent } from './terms-conditons/terms-conditons.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { FAQComponent } from './faq/faq.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Illustration1Component,
    Illustration2Component,
    Illustration3Component,
    TickComponent,
    PricingComponent,
    NavBarComponent,
    FooterComponent,
    PlansComponent,
    ContactusComponent,
    FeaturesPageComponent,
    TermsConditonsComponent,
    PrivacyPoliciesComponent,
    FAQComponent,
    RequestDemoComponent,
    FeedbackComponent,
    BlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
