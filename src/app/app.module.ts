import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  declarations: [AppComponent, HomeNavComponent, SubNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    DropdownModule,
    MenubarModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
