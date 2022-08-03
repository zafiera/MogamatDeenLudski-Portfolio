import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animateMainText = false;

   featuredWorkObject = [
    // {
    //   heading: 'Mount Legacy',
    //   description: '',
    //   imageArr: [
    //     '../../assets/Mount-legacy-CI-Featured/Asset 4.png',
    //     '../../assets/Mount-legacy-CI-Featured/Mount legacy block.png',
    //     '../../assets/Mount-legacy-CI-Featured/Mount legacy CI.png'
    //   ]
    // },
     {
       heading: 'SPCA social media',
       description: '',
       imageArr: [
         '../../assets/SPCA-social-media-Featured/SPCA SOcial media feat-01.jpg',
         '../../assets/SPCA-social-media-Featured/SPCA SOcial media feat-02.jpg',
         '../../assets/SPCA-social-media-Featured/SPCA SOcial media feat-03.jpg',
       ]
     },
     {
       heading: 'SPCA Events',
       description: '',
       imageArr: [
         '../../assets/SPCA-events-featured/SPCA event-01.jpg',
         '../../assets/SPCA-events-featured/SPCA event-02.jpg',
         '../../assets/SPCA-events-featured/SPCA event-03.jpg'
       ]
     },
     {
       heading: 'Print Design',
       description: '',
       imageArr: [
         '../../assets/Print-design-featured/Flyer_Mockup_004.jpg',
         '../../assets/Print-design-featured/Print-design-wall.jpg',
         '../../assets/Print-design-featured/Calendar-0.jpg'
       ]
     },

  ];

  ngOnInit() {
  }


  _visibilityChangeHandler(event: any) {
    this.animateMainText = event;
  }

}
