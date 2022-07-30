import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   featuredWorkObject = [
    {
      heading: 'Mount Legacy',
      description: '',
      imageArr: [
        '../../assets/Mount-legacy-CI/Asset 4.png',
        '../../assets/Mount-legacy-CI/Mount legacy block.png',
        '../../assets/Mount-legacy-CI/Mount legacy CI.png'
      ]
    },
    {
      heading: 'SPCA Events',
      description: '',
      imageArr: [
        '../../assets/SPCA-events/Paws-a-while design.jpg',
        '../../assets/SPCA-events/Vetshop Grand Opening design.jpg',
        '../../assets/SPCA-events/Vetshop promo design.jpg',
        '../../assets/SPCA-events/Yard sale design.png'
      ]
    },
    {
      heading: 'Print Design',
      description: '',
      imageArr: []
    },
    {
      heading: 'string',
      description: 'string',
      imageArr: []
    },
    {
      heading: 'string',
      description: 'string',
      imageArr: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
