import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {RouterModule} from "@angular/router";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import {routes} from "./app.routes";
import { DashboardCarsComponent } from './dashboard-cars/dashboard-cars.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    DashboardSidebarComponent,
    DashboardCarsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbThemeModule.forRoot({
      name: 'dark',
    }),
    NbIconModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
