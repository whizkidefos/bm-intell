import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { LinechartComponent } from './charts/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionHealthComponent,
    SectionOrdersComponent,
    BarchartComponent,
    PiechartComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
