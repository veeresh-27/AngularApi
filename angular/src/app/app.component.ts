import { Component } from '@angular/core';
import { Hotel } from './models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hotel';
  cartList: Hotel[] = [];
}
