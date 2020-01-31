import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { BottomnavComponent } from "./modules/bottomnav/pages/bottomnav.component";
import { BrowseComponent } from "./modules/browse/pages/browse.component";
import { SearchComponent } from "./modules/search/pages/search.component";

const routes: Routes = [
    { path: "", redirectTo: "bottomnav", pathMatch: "full" },
    { path: "bottomnav", loadChildren: "./modules/bottomnav/bottomnav.module#BottomnavModule"},
    //{ path: "items", component: ItemsComponent },
    //{ path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
