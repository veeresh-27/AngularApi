import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelViewComponent } from './component/hotel-view/hotel-view.component';
import { MenuCardComponent } from './component/menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';
import { MenuHandleComponent } from './component/menu-handle/menu-handle.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelViewComponent,
    MenuCardComponent,
    MenuHandleComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
