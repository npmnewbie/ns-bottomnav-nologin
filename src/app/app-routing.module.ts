import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "bottomnav", pathMatch: "full" },
    { path: "bottomnav", loadChildren: () => import('./modules/bottomnav/bottomnav.module').then(m => m.BottomnavModule)},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
