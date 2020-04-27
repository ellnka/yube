import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ResultsComponent} from './components/results/results.component';
import {LogoComponent} from './components/header/logo/logo.component';
import {SearchBoxComponent} from './components/header/search-box/search-box.component';
import {UserInfoComponent} from './components/header/user-info/user-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SettingsButtonComponent} from './components/header/settings-button/settings-button.component';
import {SearchItemComponent} from './components/results/search-item/search-item.component';
import {HttpClientModule} from "@angular/common/http";
import {SettingsBoxComponent} from './components/header/settings-box/settings-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsComponent,
    LogoComponent,
    SearchBoxComponent,
    UserInfoComponent,
    SearchBoxComponent,
    SettingsButtonComponent,
    SearchItemComponent,
    SettingsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
