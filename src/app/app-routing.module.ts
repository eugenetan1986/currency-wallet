import { OnboardingPage } from './onboarding/onboarding.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomePage } from './home/home.page';
//import {} from './onboarding/';

const routes: Routes = [
  {
    path: '',
    component:HomePage,
    pathMatch:'full'
  },
  {
    path: 'onboarding',
    component:OnboardingPage
  },
  {
    path: 'signup',
    component:SignupComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
