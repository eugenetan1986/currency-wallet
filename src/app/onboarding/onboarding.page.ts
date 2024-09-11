
import { Component, ViewChild , ElementRef} from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage  {

  @ViewChild('swiper') swiperRef: ElementRef | undefined; swiper?: Swiper;


  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

 Images = [
    {
      src: '../../assets/images/onboarding-finances-logo.png',
      alt: 'Image 1',
    }, {
      src: '../../assets/images/onboarding-money-logo.png',
      alt: 'Image 2'
    }, {
      src: '../../assets/images/onboarding-goals-logo.png',
      alt: 'Image 3'
    }
  ]

   public config: SwiperOptions = {
    //pagination:true,
    pagination: {
      el: '.custom-pagination'
    },
  };

}




