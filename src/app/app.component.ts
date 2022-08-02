import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MogamatDeenLudski-Portfolio';
  top:any;
  left:any;
  expand=false;
  private $event: any;

  constructor() {}


  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.$event = $event;
    this.expand=true;
    setTimeout(() => {
      this.expand=false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top=($event.pageY - 22)+ "px";
    this.left= ($event.pageX - 22)+ "px";
  }


}
