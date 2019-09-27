import {ModuleWithProviders, NgModule} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {MachineconfigComponent} from "@app/features/tables/machineconfig/machineconfig/machineconfig.component";


export const routes: Routes = [
  {
    path: '', component: MachineconfigComponent
  },
];

//export const routing = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MachineconfigRouting {
  
}