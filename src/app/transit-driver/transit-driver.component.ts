import { Component, OnInit } from '@angular/core';
import { TransitService } from '../transit/transit.service';
import { Booking } from '../model/booking';
import { Driver } from '../model/driver';
import { Router } from '@angular/router';
import { of, interval } from 'rxjs';
import { takeWhile, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transit-driver',
  templateUrl: './transit-driver.component.html',
  styleUrls: ['./transit-driver.component.css']
})
export class TransitDriverComponent implements OnInit {

  booking: Booking;
  err: any;
  started: boolean = false;
  completed: boolean = false;
  driver: Driver;
  i:number = 0;
  // timers$=of(this.counter(0,100));

  constructor(private transitService: TransitService,private route:Router) {
    this.getBooking();
  }

  ngOnInit() {
  }

  counter(num1: number) {
    return num1+1;
  }

  timer(){
    interval(1000).pipe(startWith(0), switchMap(() => of(this.counter(this.i))), 
    takeWhile(a=>!(!this.started || this.completed))).subscribe(i=>this.i=i);
  }
  getBooking() {
    this.transitService.getBooking().subscribe(book => this.booking = book, err => this.err = err);
  }

  startTrip() {
    this.transitService.startTrip(this.booking).subscribe(book => this.booking = book, err => this.err = err);
    this.started = true;
    this.timer();
  }

  endTrip(){
    this.booking.finalTime=20;
    this.completed = true;
    this.transitService.endTrip(this.booking).subscribe(book => this.booking = book, err => this.err = err);
    this.transitService.getDriver(this.booking.driverId).subscribe(driver => this.driver = driver, err => this.err = err);
  }
}
