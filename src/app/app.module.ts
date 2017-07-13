import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule, BaseRequestOptions, RequestOptions, BrowserXhr} from "@angular/http";
import {routing} from "./app.routing";
import {AuthorizationGuard} from "./log-in/authorization.guard";
import {AlertService} from "./log-in/alert.service";
import {UserService} from "./log-in/user.service";
import {MockBackend} from "@angular/http/testing";
import {AuthentificationService} from "./log-in/authentification.service";
import {AlertComponent} from "./log-in/alert/alert.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./log-in/login/login.component";
import {RegisterComponent} from "./log-in/register/register.component";
import {AccountSettingsComponent} from "./log-in/account-settings/account-settings.component";
import { SiteListComponent } from './home/site-list/site-list.component';
import { SiteComponent } from './home/site/site.component';
import {SiteService} from "./home/site/site.service";
import {LineChartComponent} from "./stats/charts/line-chart/line-chart.component";
import {customHttpProvider} from "./custom-http";
import {SensorListGetterService} from "./home/site/sensor-list/sensor-list-getter.service";
import {DropdownComponenent} from "./home/site/sensor-list/dropdown.component";
import {SensorLabelGetterService} from "./home/site/sensor-list/sensor-label-getter.service";
import {SensorDataGetterService} from "./home/site/sensor-list/sensor-data-getter.service";
import { AdminSettingsComponent } from './home/admin-settings/admin-settings.component';
import { UserSitePermissionsComponent } from './home/admin-settings/user-site-permissions/user-site-permissions.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountSettingsComponent,
    SiteListComponent,
    SiteComponent,
    LineChartComponent,
    DropdownComponenent,
    AdminSettingsComponent,
    UserSitePermissionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    customHttpProvider,
    AuthorizationGuard,
    AlertService,
    UserService,
    AuthentificationService,
    SiteService,
    SensorListGetterService,
    SensorLabelGetterService,
    SensorDataGetterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
