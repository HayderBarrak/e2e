import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfscriptComponent} from "./confscript.component";


const routes: Routes = [{
  path: '',
  component: ConfscriptComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfscriptRoutingModule { }
