import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EbartNavComponent } from './ebart-nav/ebart-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCheckbox, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { EbartnavComponent } from './ebartnav/ebartnav.component';

import { MatInputModule } from '@angular/material';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './materialmodule';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { BottomComponent } from './bottom/bottom.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    EbartNavComponent,
    EbartnavComponent,
    WebComponent,
    MobileComponent,
    BottomComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
