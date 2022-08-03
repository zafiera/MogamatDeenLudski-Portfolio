import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss']
})
export class ProjectTemplateComponent implements OnInit {

  @Input() imageArr: any;

  constructor() { }

  ngOnInit(): void {
  }

}
