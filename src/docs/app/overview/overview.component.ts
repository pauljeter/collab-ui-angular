import { Component } from '@angular/core';

@Component({
  selector: 'docs-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public heroImage = '/assets/HAE18860.jpg';
  public angularJsImg = '/assets/angularjs-inline.png';
  public angularImg = '/assets/angular-inline.png';
  public reactImg = '/assets/react-inline.png';
  public angularUrl = 'http://collab-ui-angular';
  public angularJsUrl = 'http://collab-ui-angularjs';
  public reactUrl = 'http://collab-ui-react';
}
