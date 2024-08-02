import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[PreventDoubleClick]'
})
export class PreventDoubleClickDirective {

  @Input() delay: number = 300; // Delay in milliseconds (default is 300ms)

  private isDisabled = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.isDisabled) {
      event.stopImmediatePropagation();
      return;
    }

    this.isDisabled = true;
    setTimeout(() => {
      this.isDisabled = false;
    }, this.delay);
  }

}
