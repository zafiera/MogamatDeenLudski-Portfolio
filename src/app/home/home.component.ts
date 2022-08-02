import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animateMainText = false;

   featuredWorkObject = [
    {
      heading: 'Mount Legacy',
      description: '',
      imageArr: [
        '../../assets/Mount-legacy-CI-Featured/Asset 4.png',
        '../../assets/Mount-legacy-CI-Featured/Mount legacy block.png',
        '../../assets/Mount-legacy-CI-Featured/Mount legacy CI.png'
      ]
    },
    {
      heading: 'SPCA Events',
      description: '',
      imageArr: [
        // '../../assets/SPCA-events-featured/Paws-a-while design.jpg',
        '../../assets/SPCA-events-featured/Vetshop Grand Opening design.jpg',
        '../../assets/SPCA-events-featured/Vetshop promo design.jpg',
        '../../assets/SPCA-events-featured/Yard sale design.png'
      ]
    },
    {
      heading: 'Print Design',
      description: '',
      imageArr: [
        '../../assets/Print-design-featured/Inspectorate-missionandvision-3.jpg',
        '../../assets/Print-design-featured/Light box _ VETSHOP.jpg',
        '../../assets/Print-design-featured/0.jpg'
      ]
    },
    {
      heading: 'SPCA social media',
      description: '',
      imageArr: [
        '../../assets/SPCA-social-media-Featured/Cat-post.jpg',
        '../../assets/SPCA-social-media-Featured/Social-media-post-1-insta.jpg',
        '../../assets/SPCA-social-media-Featured/Sport-Scarf-post (1).jpg',
      ]
    },

  ];

  ngOnInit() {
  }


  _visibilityChangeHandler(event: any) {
    this.animateMainText = event;
  }

}
