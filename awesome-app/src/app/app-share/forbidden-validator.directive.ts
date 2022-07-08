import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { AppValidators } from '../services/app-validators';


// <input  appForbiddenValidator="admin,mgr"/>
@Directive({
  selector: '[appForbiddenValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}
  ]
})
export class ForbiddenValidatorDirective implements Validator {

  @Input()
  public appForbiddenValidator: string ="";

  constructor() { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    console.log("ForbiddenValidatorDirective", this.appForbiddenValidator);
    const values = this.appForbiddenValidator.split(",");
  
    const value = control.value;
            if(value){
                    debugger;
                    const isValid = !values.includes(value);
                    return isValid ? null : {forbidden: "invalid"}
            }
    return null;

  }

}
