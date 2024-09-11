import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Directive({
  selector: '[swiperElement]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement;

  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
    console.log(this.config);
    // @ts-ignore
    this.el.nativeElement.initialize();
    console.log(this.el.nativeElement);
  }
}
