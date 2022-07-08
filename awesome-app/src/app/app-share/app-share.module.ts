import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective, ForbiddenValidatorDirective
  ]
})
export class AppShareModule { }
