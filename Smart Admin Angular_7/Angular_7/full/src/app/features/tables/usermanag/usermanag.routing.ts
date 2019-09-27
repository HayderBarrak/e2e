import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import {UsermanagComponent} from "@app/features/tables/usermanag/usermanag/usermanag.component";


export const routes: Routes = [
    {
        path: '', component: UsermanagComponent
    },
];

//export const routing = RouterModule.forChild(routes);
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsermanagRouting {

}