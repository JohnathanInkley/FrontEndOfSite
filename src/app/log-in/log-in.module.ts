import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent, HomeComponent, LoginComponent, RegisterComponent, AccountSettingsComponent]
})
export class LogInModule { }
