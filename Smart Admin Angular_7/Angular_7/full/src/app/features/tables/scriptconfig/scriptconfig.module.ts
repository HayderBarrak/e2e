import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScriptconfigComponent} from './scriptconfig/scriptconfig.component';
import {SharedModule} from "@app/shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScriptconfigRouting} from "@app/features/tables/scriptconfig/scriptconfig.routing";
import {SmartadminInputModule} from "@app/shared/forms/input/smartadmin-input.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {SmartadminEditorsModule} from "@app/shared/forms/editors/smartadmin-editors.module";

@NgModule({
  declarations: [ScriptconfigComponent],
    imports: [
        CommonModule,
        SharedModule,
        NgxDatatableModule,
        ScriptconfigRouting,
        ReactiveFormsModule,
        FormsModule,
        SmartadminInputModule,
        NgSelectModule,
        SmartadminValidationModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        }),
        SmartadminEditorsModule
    ]
})
export class ScriptconfigModule { }
