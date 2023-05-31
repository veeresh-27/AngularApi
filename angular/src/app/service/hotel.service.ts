import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  Hotel: Hotel = {} as Hotel;
  constructor(private httpClient: HttpClient) {}

  //url: string = 'http://localhost:3000/Hotel';

  public getAllHotel(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>('http://localhost:3000/hotels');
  }

  public getTelById(id: number): Observable<Hotel> {
    let temp = 'http://localhost:3000/hotels' + '/' + id;
    return this.httpClient.get<Hotel>(temp);
  }

  public updateHotel(id: number, Hotel: Hotel): Observable<Hotel> {
    let temp = 'http://localhost:3000/hotels' + '/' + id;
    return this.httpClient.put<Hotel>(temp, Hotel);
  }

  public addHotel(Hotel: Hotel): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:3000/hotels', Hotel);
  }

  public deleteHotelById(id: number): Observable<Hotel> {
    let temp = 'http://localhost:3000/hotels' + '/' + id;
    return this.httpClient.delete<Hotel>(temp);
  }
}
