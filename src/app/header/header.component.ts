import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isHome: boolean = false;
  isAbout: boolean = false;
  isWork: boolean = false;
  isContact: boolean = false;
  isResume: boolean = false;

  subscription;

  constructor(private router : Router) {
    this.subscription = router.events.subscribe(() => {
      this.isHome = this.router.url === '/';
      this.isAbout = this.router.url.includes('about');
      this.isWork = this.router.url.includes('work');
      this.isContact = this.router.url.includes('contact');
      this.isResume = this.router.url.includes('resume');
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
