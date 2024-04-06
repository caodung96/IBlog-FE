import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsServiceComponent } from './pages/terms-service/terms-service.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:slug', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'privaypolicy', component: PrivacyPolicyComponent },
  { path: 'termsservice', component: TermsServiceComponent },
  { path: 'contactus', component: ContactUsComponent },
  
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
