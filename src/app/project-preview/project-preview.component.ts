import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() heading: any;
  @Input() description: any;
  @Input() buttonText: any;
  @Input() imageArr: any;

  constructor() { }

  ngOnInit(): void {
  }

}
