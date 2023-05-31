import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  @Input() hotel: Hotel = {} as Hotel;
  myCart: Hotel[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: HotelService //   private router: Router
  ) {}

  addTodCart() {
    if (localStorage.getItem('mycart') != null) {
      var cart = localStorage.getItem('mycart');

      this.myCart = JSON.parse(cart || '{}');
      this.service.getTelById(this.hotel.id).subscribe((data) => {
        this.myCart.push(data);
      });
      localStorage.setItem('mycart', JSON.stringify(this.myCart));
    } else {
      this.service.getTelById(this.hotel.id).subscribe((data) => {
        this.myCart.push(data);
      });
      localStorage.setItem('mycart', JSON.stringify(this.myCart));
    }
  }
}
