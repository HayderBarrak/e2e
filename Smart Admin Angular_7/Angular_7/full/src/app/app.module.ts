import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {UserModule} from "../../../full/src/app/shared/user/user.module";
import {FormsModule} from "@angular/forms";

import {UserService} from "@app/shared/user/user.service";
import {AccountService} from "@app/features/auth/access/account.service";
import {UserRouteAccessService} from "@app/features/auth/access/user-route-access-service";
import {StateStorageService} from "@app/features/auth/access/state-storage.service";
import {LoginModalService} from "@app/features/auth/login/login-modal.service";
import {loginService} from "@app/features/auth/login/login.service";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {AuthService} from "@app/core/services";
import {AuthGuard} from "@app/core/guards/auth.guard";
import {ToastrModule} from "ngx-toastr";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
      UserModule,
      FormsModule,
    ToastrModule.forRoot(),
      NgSelectModule
  ],
  providers: [
      UserService,AccountService,UserRouteAccessService,StateStorageService,LoginModalService,loginService,LocalStorageService,SessionStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent],})
export class AppModule { }
