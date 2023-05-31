import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  myCart: Hotel[] = [];
  ngOnInit(): void {
    if (localStorage.getItem('mycart') != null) {
      var cart = localStorage.getItem('mycart');

      this.myCart = JSON.parse(cart || '{}');
    }
  }
}
