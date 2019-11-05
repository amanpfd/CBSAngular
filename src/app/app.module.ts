import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransitDriverComponent } from './transit-driver/transit-driver.component';
import { TransitUserComponent } from './transit-user/transit-user.component';
import { PaymentComponent } from './payment/payment.component';
import { NavRoutingModule } from './nav/nav-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransitDriverComponent,
    TransitUserComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule, FormsModule, NavRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
