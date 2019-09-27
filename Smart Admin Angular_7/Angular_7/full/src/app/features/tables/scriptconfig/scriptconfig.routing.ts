import {ModuleWithProviders, NgModule} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {MachineconfigComponent} from "@app/features/tables/machineconfig/machineconfig/machineconfig.component";
import {ScriptconfigComponent} from "@app/features/tables/scriptconfig/scriptconfig/scriptconfig.component";


export const routes: Routes = [
    {
        path: '', component: ScriptconfigComponent
    },
];

//export const routing = RouterModule.forChild(routes);
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ScriptconfigRouting {

}