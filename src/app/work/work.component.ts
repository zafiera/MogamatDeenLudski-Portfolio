import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projectArr = [
    {
      mainImage: '../../assets/Future-business/All-cards.jpg',
      verticalRowImages: [
        '../../assets/Future-business/Future cards-01.jpg',
        '../../assets/Future-business/Future cards-02.jpg'
      ],
      horizontalRowImages: [
        '../../assets/Future-business/Future cards-03.jpg',
        '../../assets/Future-business/Future cards-04.jpg',
        '../../assets/Future-business/Future cards-05.jpg'
      ]
    },
    {
      mainImage: '../../assets/Prints/Card-wall-2.jpg',
      verticalRowImages: [
        '../../assets/Prints/Card1.jpg',
        '../../assets/Prints/Card2.jpg'
      ],
      horizontalRowImages: [
        '../../assets/Prints/Card3.jpg',
        '../../assets/Prints/Card4.jpg',
        '../../assets/Prints/Card5.jpg',
      ],
    },
    {
      mainImage: '../../assets/Apex/Apex-mockup.jpg',
      verticalRowImages: [
        '../../assets/Apex/Apex-mockup-01.jpg',
        '../../assets/Apex/Apex-mockup-02.jpg'
      ],
      horizontalRowImages: [
        '../../assets/Apex/Apex-mockup-03.jpg',
        '../../assets/Apex/Apex-mockup-04.jpg',
        '../../assets/Apex/Apex-mockup-05.jpg'
      ]
    },
    {
      mainImage: '../../assets/Online-Store/Card-wall.jpg',
      verticalRowImages: [
        '../../assets/Online-Store/Cat post-01.jpg',
        '../../assets/Online-Store/Online Store promo 21.jpg',
      ],
      horizontalRowImages: [
        '../../assets/Online-Store/Online Store promo 2.jpg',
        '../../assets/Online-Store/Sport-Scarf-post (1).jpg',
        '../../assets/Online-Store/On the way-01.jpg'
      ]
    },
    {
      mainImage: '../../assets/Events/Card-wall.jpg',
      verticalRowImages: [
        '../../assets/Events/Fundraising cycle design.jpg',
        '../../assets/Events/Vetshop Grand Opening design.jpg'
      ],
      horizontalRowImages: [
        '../../assets/Events/mandela day post 2-01.jpg',
        '../../assets/Events/Yard sale design.png',
        '../../assets/Events/Vetshop promo design.jpg'
      ]
    },
    {
      mainImage: '../../assets/Passion-seed/Card-wall.jpg',
      verticalRowImages: [
        '../../assets/Passion-seed/Passion seed post 4.png',
        '../../assets/Passion-seed/passion seed post 6.png'
      ],
      horizontalRowImages: [
        '../../assets/Passion-seed/Passion seed post 7.jpg',
        '../../assets/Passion-seed/Passion seed post 8.jpg',
        '../../assets/Passion-seed/Passion seed post 9.jpg'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
