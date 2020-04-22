import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiNotificationBarComponent } from './components/ui-notification-bar/ui-notification-bar.component';
import { UiIconItemComponent } from './components/ui-notification-bar/ui-icon-item/ui-icon-item.component';
import { UiTextItemComponent } from './components/ui-notification-bar/ui-text-item/ui-text-item.component';
import { UiLinkItemComponent } from './components/ui-notification-bar/ui-link-item/ui-link-item.component';
import { BarUseComponent } from './pages/bar-use/bar-use.component';
import { BarSimpleTextComponent } from './pages/bar-simple-text/bar-simple-text.component';

@NgModule({
  declarations: [
    AppComponent,
    UiNotificationBarComponent,
    UiIconItemComponent,
    UiTextItemComponent,
    UiLinkItemComponent,
    BarUseComponent,
    BarSimpleTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
