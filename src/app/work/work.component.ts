import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  imageArr = [
    {
      date: '',
      company: 'SPCA',
      caption: '',
      companyImage: '../../assets/',
      mainImage: '../../assets/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
