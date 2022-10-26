import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';

import { DOCUMENT } from '@angular/common';
@Directive({
  selector: '[appHideScrollY]'
})
export class HideScrollYDirective {
  abc: string = 'hello';
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.element.nativeElement.offsetParent,
      'height',
      'auto !important'
    );
    this.renderer.setStyle(
      this.element.nativeElement.offsetParent,
      'overflow-y',
      'hidden'
    );
  }
  ngOnDestroy() {
    this.renderer.removeStyle(this.document.body, 'overflow-y');
  }
}
