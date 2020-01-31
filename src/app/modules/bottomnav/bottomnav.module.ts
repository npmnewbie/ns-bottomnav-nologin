import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BottomnavRoutingModule } from './bottomnav-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BottomnavComponent } from './pages/bottomnav.component';


@NgModule({
  declarations: [BottomnavComponent],
  imports: [
    BottomnavRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomnavModule { }
