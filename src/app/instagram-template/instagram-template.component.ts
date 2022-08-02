import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instagram-template',
  templateUrl: './instagram-template.component.html',
  styleUrls: ['./instagram-template.component.scss']
})
export class InstagramTemplateComponent implements OnInit {

  @Input() date: string | undefined;
  @Input() company: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
