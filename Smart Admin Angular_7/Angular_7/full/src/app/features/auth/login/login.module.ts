import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SmartadminValidationModule} from "@app/shared/forms/validation/smartadmin-validation.module";


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SmartadminValidationModule
    ],
  declarations: [LoginComponent],
  providers: [
    NgbActiveModal,
  ]
})
export class LoginModule { }
