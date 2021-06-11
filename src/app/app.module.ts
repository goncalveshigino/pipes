import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import localeEs from '@angular/common/locales/es'

registerLocaleData(localePt);
registerLocaleData(localeEs);

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
