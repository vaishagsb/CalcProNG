import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  ampm: string = 'AM';

  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();

      this.ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12; // Convert to 12-hour format
      this.hours = h < 10 ? '0' + h : '' + h;
      this.minutes = m < 10 ? '0' + m : '' + m;
      this.seconds = s < 10 ? '0' + s : '' + s;
    }, 1000);
  }
}
