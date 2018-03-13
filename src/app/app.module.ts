import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpParams, HttpClientModule} from '@angular/common/http';
import { AppBootstrapModule } from './components/app-bootstrap/app-bootstrap.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { PersonService } from './services/person/person.service';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';

import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppBootstrapModule,
    CurrencyMaskModule,
  ],
  providers: [PersonService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    HttpClientModule,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
