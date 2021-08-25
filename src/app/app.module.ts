import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { LeftSidebarComponent } from './components/body-section/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/body-section/right-sidebar/right-sidebar.component';
import { MiddleSectionComponent } from './components/body-section/middle-section/middle-section.component';
import { TopHeaderLeftComponent } from './components/top-header/top-header-left/top-header-left.component';
import { TopHeaderMiddleComponent } from './components/top-header/top-header-middle/top-header-middle.component';
import { TopHeaderRightComponent } from './components/top-header/top-header-right/top-header-right.component';
import { BodySectionComponent } from './components/body-section/body-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MiddleSectionComponent,
    TopHeaderLeftComponent,
    TopHeaderMiddleComponent,
    TopHeaderRightComponent,
    BodySectionComponent
  ],
 
  imports: [
    BrowserModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
