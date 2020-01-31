import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BrowseComponent } from '../browse/pages/browse.component';
import { SearchComponent } from '../search/pages/search.component';
import { BottomnavComponent } from './pages/bottomnav.component';

const routes: Routes = [
  //{ path: "", redirectTo: "bottomnav", pathMatch: "full" },
  { path: "bottomnav", redirectTo: "/(browse:browse//search:search)", pathMatch: "full" },
  
  { path: "browse", loadChildren: './modules/browse/browse.module#BrowseModule' },    
  { path: "search", loadChildren: './modules/search/search.module#SearchModule' }, 
];

@NgModule({

  imports: [
    NativeScriptRouterModule.forChild([{path: "", component: BottomnavComponent, children: routes}]),
    //NativeScriptRouterModule.forChild(routes),

  ],
  exports: [NativeScriptRouterModule]
})
export class BottomnavRoutingModule { }
