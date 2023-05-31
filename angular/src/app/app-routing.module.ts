import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelViewComponent } from './component/hotel-view/hotel-view.component';
import { MenuHandleComponent } from './component/menu-handle/menu-handle.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '', component: HotelViewComponent },
  { path: 'details/:id', component: MenuHandleComponent },
  { path: 'mycart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
