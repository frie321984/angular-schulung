import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input.[appAutoInputLength]'
})
export class AutoInputLengthDirective {
  inputBox: HTMLInputElement;
  @Input()
  appAutoInputLength: string;

  constructor(elementRef: ElementRef) {
    this.inputBox = elementRef.nativeElement;
  }

  @HostListener('focus')
  gotFocus() {
    const width = this.inputBox.offsetWidth + this.getSize();
    this.inputBox.style.width = width + 'px';
  }

  @HostListener('blur')
  lostFocus() {
    const width = this.inputBox.offsetWidth - this.getSize();
    this.inputBox.style.width = width + 'px';
  }

  private getSize(): number {
    if (this.appAutoInputLength) {
      return Number.parseInt(this.appAutoInputLength);
    }
    // default
    return 200;
  }

}
