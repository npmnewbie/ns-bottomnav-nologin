import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SearchComponent } from './pages/search.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

const searchChildrens: Routes = [
  { path: "", redirectTo: "search" },
  { path: "search", component: SearchComponent },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(searchChildrens)
  ],

  exports: [NativeScriptRouterModule]
})

export class SearchRoutingModule { }
