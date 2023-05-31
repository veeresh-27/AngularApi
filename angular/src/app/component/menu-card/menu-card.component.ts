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

  constructor(
    private route: ActivatedRoute,
    private service: HotelService //   private router: Router
  ) {}

  addToCart(id: number) {
    this.service.getTelById(id).subscribe((data) => {});
  }
}
