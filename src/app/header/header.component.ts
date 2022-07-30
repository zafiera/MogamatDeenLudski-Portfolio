import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHome: boolean = false;
  isAbout: boolean = false;
  isWork: boolean = false;
  isContact: boolean = false;
  isResume: boolean = false;

  constructor(private router : Router) {
    router.events.subscribe((val) => {
      this.isHome = this.router.url === '/';
      this.isAbout = this.router.url.includes('about');
      this.isWork = this.router.url.includes('work');
      this.isContact = this.router.url.includes('contact');
      this.isResume = this.router.url.includes('resume');
    });
  }

  ngOnInit() {

  }

}
