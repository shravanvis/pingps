import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modals/dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { AddresssearchComponent } from './modals/addresssearch/addresssearch.component';
import { ChatmodalComponent } from './modals/chatmodal/chatmodal.component';
import { SetupComponent } from './modals/setup/setup.component';
import { ReportsmodalComponent } from './modals/reportsmodal/reportsmodal.component';
import { ShowpointmodalComponent } from './modals/showpointmodal/showpointmodal.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './snackbar/first/first.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    BottombarComponent,
    DashboardComponent,
    AddresssearchComponent,
    ChatmodalComponent,
    SetupComponent,
    ReportsmodalComponent,
    ShowpointmodalComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ThemeService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [DashboardComponent, AddresssearchComponent, ChatmodalComponent, SetupComponent, ReportsmodalComponent, ShowpointmodalComponent, FirstComponent]
})
export class AppModule { }
