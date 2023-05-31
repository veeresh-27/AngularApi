import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from 'express';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-menu-handle',
  templateUrl: './menu-handle.component.html',
  styleUrls: ['./menu-handle.component.css'],
})
export class MenuHandleComponent {
  id: any;
  hotel: Hotel = {} as Hotel;
  display: boolean = true;
  count: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: HotelService //   private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      if (this.id == 'add') {
        this.display = true;
      } else {
        this.service.getTelById(parseInt(this.id)).subscribe((data) => {
          this.hotel = data;
          this.display = false;
        });
      }
    });
  }
  updateDetails() {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      this.service
        .updateHotel(parseInt(this.id), this.hotel)
        .subscribe((data) => {
          alert(' updated');
          this.ngOnInit();
        });
    });
  }

  addHotel() {
    this.service.addHotel(this.hotel).subscribe((data) => {
      alert('Added employee successful');
      //this.router.navigate(['home']);
    });
  }

  deleteHotel() {
    this.service.deleteHotelById(this.hotel.id).subscribe(() => {
      alert('Employee deleted successful');
      // this.router.navigate(['home']);
    });
  }

 
}
