import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfscriptComponent} from './confscript.component';
import {ConfscriptRoutingModule} from "./confscript-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from '@app/shared/shared.module';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RowDetailComponent} from './row-detail-script/row-detail.component';
import {SmartadminEditorsModule} from "@app/shared/forms/editors/smartadmin-editors.module";
import {DropzoneModule} from "@app/shared/forms/dropzone/dropzone.module";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';


@NgModule({
  declarations: [ConfscriptComponent,RowDetailComponent],
    imports: [
        CommonModule,
        ConfscriptRoutingModule, ReactiveFormsModule,
        SharedModule,
        NgxDatatableModule,
        SmartadminEditorsModule,
        DropzoneModule,
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
export class ConfscriptModule { }
