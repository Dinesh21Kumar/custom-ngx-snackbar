import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SnackbarModule} from 'ngx-snackbar';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnackbarModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
