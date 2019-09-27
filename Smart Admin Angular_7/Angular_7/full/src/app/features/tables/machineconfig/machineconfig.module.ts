import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineconfigComponent} from './machineconfig/machineconfig.component';
import {SharedModule} from "@app/shared/shared.module";
import {MachineconfigRouting} from "@app/features/tables/machineconfig/machineconfig.routing";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ReactiveFormsModule} from "@angular/forms";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';

@NgModule({
  declarations: [MachineconfigComponent],
    imports: [
        CommonModule,
        SharedModule,
        NgxDatatableModule,
        MachineconfigRouting,
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
export class MachineconfigModule { }
