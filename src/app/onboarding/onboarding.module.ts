import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { OnboardingPage } from './onboarding.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SwiperDirective } from 'src/lib/swiper.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperDirective,

  ],
  declarations: [OnboardingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
    export class OnboardingPageModule {}
