import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  dataModel: string = 'ngModel Test';

  errorObj = {
    'required': 'This field is required',
    'minlength': 'This field should be more than 8 chars',
    'maxlength': 'This field cant be more than 10 chars',
    'email': "Not a valid email"
  }


  ngOnInit() {}

}
