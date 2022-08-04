import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projectArr = [
    {
      mainImage: '../../assets/folder/imagename.format',
      verticalRowImages: [
        '../../assets/folder/imagename.format',
        '../../assets/folder/imagename.format'
      ],
      horizontalRowImages: [
        '../../assets/folder/imagename.format',
        '../../assets/folder/imagename.format',
        '../../assets/folder/imagename.format'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
