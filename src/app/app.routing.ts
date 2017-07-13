import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthorizationGuard} from "./log-in/authorization.guard";
import {LoginComponent} from "./log-in/login/login.component";
import {RegisterComponent} from "./log-in/register/register.component";
import {AccountSettingsComponent} from "./log-in/account-settings/account-settings.component";
import {SiteComponent} from "./home/site/site.component";
import {AdminSettingsComponent} from "./home/admin-settings/admin-settings.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthorizationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account-settings', component: AccountSettingsComponent},
  {path: 'admin-settings', component: AdminSettingsComponent},
  {path: 'site/:siteName', component:SiteComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
