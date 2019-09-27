import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "@app/shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ReactiveFormsModule} from "@angular/forms";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {UsermanagComponent} from "@app/features/tables/usermanag/usermanag/usermanag.component";
import {UsermanagRouting} from "@app/features/tables/usermanag/usermanag.routing";

@NgModule({
    declarations: [UsermanagComponent],
    imports: [
        CommonModule,
        SharedModule,
        NgxDatatableModule,
        UsermanagRouting,
        ReactiveFormsModule,
        SmartadminValidationModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        })

    ]
})
export class UsermanagModule {
}
