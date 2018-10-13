import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpperCaseDirective } from './upper-case.directive';
import { FormErrorComponent } from './form-error/form-error.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UpperCaseDirective,
    FormErrorComponent,
    CardComponent
  ],
  exports: [
    UpperCaseDirective,
    FormErrorComponent,
    CardComponent
  ]
})
export class SharedModule { }
