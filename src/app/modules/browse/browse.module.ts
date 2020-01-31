import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowseRoutingModule } from './browse-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BrowseComponent } from './pages/browse.component';

@NgModule({
  declarations: [BrowseComponent],
  imports: [
    BrowseRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BrowseModule { }
