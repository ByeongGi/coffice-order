import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  MatTabsModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { HeaderComponent } from './header/header.component';
import { MenuGridComponent } from './menu-grid/menu-grid.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatTabsModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule
];

@NgModule({
  entryComponents: [MenuGridComponent],
  declarations: [
    MenuGridComponent,
    AppComponent,
    MenuTabComponent,
    HeaderComponent,
    DynamicComponentDirective
  ],
  imports: modules,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
