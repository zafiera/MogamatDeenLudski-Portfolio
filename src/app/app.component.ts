import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MogamatDeenLudski-Portfolio';
  top: any;
  left: any;
  expand = false;
  private $event: any;

  isLoading = false;
  showLoadingScreen = false;

  constructor() {
  }


  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.$event = $event;
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500)
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top = ($event.pageY - 22) + "px";
    this.left = ($event.pageX - 22) + "px";
  }



  ngOnInit() {
    const justLanded = sessionStorage.getItem('justLanded');
    this.isLoading = justLanded === 'true';
    if(!this.isLoading) {
      sessionStorage.setItem('justLanded', 'true');
      this.showLoadingScreen = true;
    }

    setTimeout(() => {
      this.showLoadingScreen = false;
      sessionStorage.setItem('justLanded', 'true');
    }, 7500)
  }


}
