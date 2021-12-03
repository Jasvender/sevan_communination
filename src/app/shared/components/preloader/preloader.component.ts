import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  constructor() { }
  intervalId = 0;
  counterStop: boolean = true;
  seconds = 0;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop()  {
    // this.clearTimer();
    // this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      if(this.seconds < 101){
        this.seconds += 1;
      }
      if (this.seconds === 101) {
        this.counterStop = false 
      } 
    }, 30);
  }

}
