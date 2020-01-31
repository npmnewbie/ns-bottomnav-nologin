import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SearchComponent } from './pages/search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    SearchRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule { }
