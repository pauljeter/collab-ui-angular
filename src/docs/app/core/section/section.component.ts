import { NgClass } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'docs-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionComponent implements OnInit {
  public angularJsImg = '/assets/angularjs-inline.png';
  public coreImg = '/assets/html-css.png';
  public reactImg = '/assets/react-inline.png';
  public coreUrl;
  public angularJsUrl;
  public reactUrl;

  @Input() public section;
  @Input() public showCode;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const catId = this.route.snapshot.params.category;
    const compId = this.route.snapshot.params.component;
    const path = `${catId}/${compId}#${this.section.section}`;
    this.coreUrl = `http://collab-ui.cisco.com/${path}`;
    this.angularJsUrl = `http://collab-ui-angularjs.cisco.com/${path}`;
    this.reactUrl = `http://collab-ui-react.cisco.com/${path}`;
  }

}
