import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[ovIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
  @Input('ovIntersectionObserver') rootMargin: string = '0px';

  @Output() intersect = new EventEmitter<IntersectionObserverEntry>();

  private intersectionObserver!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        this.intersect.next(entry);
      },
      {
        rootMargin: this.rootMargin,
      }
    );
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }
}
