import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BrowseComponent } from './pages/browse.component';
import { SearchComponent } from '../search/pages/search.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
/*
const browseChildrens: Routes = [
  { path: "", redirectTo: "browse" },
  { path: "browse", component: BrowseComponent },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(browseChildrens)
  ],

  exports: [NativeScriptRouterModule]
})
*/
export class BrowseRoutingModule { }
