import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instagram-template',
  templateUrl: './instagram-template.component.html',
  styleUrls: ['./instagram-template.component.scss']
})
export class InstagramTemplateComponent implements OnInit {

  @Input() date: string | undefined;
  @Input() company: string | undefined;
  @Input() caption: string | undefined;
  @Input() companyImage: string | undefined;
  @Input() mainImage: string | undefined;
  randomNum = Math.floor((Math.random() * 100000) + 100)


  constructor() { }

  ngOnInit(): void {
  }

}
