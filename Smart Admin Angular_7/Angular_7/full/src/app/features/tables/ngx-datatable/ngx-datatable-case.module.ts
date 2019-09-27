import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxDatatableCaseRoutingModule} from './ngx-datatable-case-routing.module';
import {NgxDatatableCaseComponent} from "./ngx-datatable-case.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RowDetailComponent} from './row-detail/row-detail.component';
import {PagedTableComponent} from './paged-table/paged-table.component';
import {SharedModule} from '@app/shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';


@NgModule({
    imports: [
        CommonModule,
        NgxDatatableCaseRoutingModule,
        NgxDatatableModule,
        SharedModule,
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
    ],
  declarations: [NgxDatatableCaseComponent, RowDetailComponent, PagedTableComponent]
})
export class NgxDatatableCaseModule { }
