import { NgModule } from '@angular/core';

import { HideItDirective } from '../directives/hideit.directive';


@NgModule({
  declarations: [
    HideItDirective
  ],
  exports: [
    HideItDirective
  ]
})
export class SharedModule{}