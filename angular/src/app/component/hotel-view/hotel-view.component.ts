import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.css'],
})
export class HotelViewComponent implements OnInit {
  hotelList: Hotel[] = [];
  
  
  constructor(private service: HotelService) {}
  getDataFromServer() {
    let observable = this.service.getAllHotel();
    observable.subscribe((data: Hotel[]) => {
      this.hotelList = data;
    });
  }
  ngOnInit(): void {
    this.getDataFromServer();
  }
}
