import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(private ngControl:NgControl) { 
    
  }

  @HostListener('blur')onBlur() {
    return (typeof this.ctrl.value === 'string' ? this.ctrl.setValue(this.ctrl.value.replace(/\s{2,}/g, ' ').trim().toUpperCase()) :  this.ctrl.setValue(this.ctrl.value));
  }
    
  get ctrl() {
      return this.ngControl.control;
  }

}
