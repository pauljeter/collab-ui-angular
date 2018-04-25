import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'cui-card',
  template: `
    <div class="cui-card cui-card--{{size}} cui-card--{{type}}">
      <article>
        <ng-content></ng-content>
      </article>
    </div>
  `,
  styles: [`
    .cui-card--1,
    .cui-card--2,
    .cui-card--3,
    .cui-card--4,
    .cui-card--5,
    .cui-card--6,
    .cui-card--7,
    .cui-card--8,
    .cui-card--9,
    .cui-card--10,
    .cui-card--11,
    .cui-card--12 {
      width: 100%;
    }

    @media (min-width: 40.063em) {
      .cui-card--1 {
        width: 8.33333%;
      }
      .cui-card--2 {
        width: 16.66667%;
      }
      .cui-card--3 {
        width: 25%;
      }
      .cui-card--4 {
        width: 33.33333%;
      }
      .cui-card--5 {
        width: 41.66667%;
      }
      .cui-card--6 {
        width: 50%;
      }
      .cui-card--7 {
        width: 58.33333%;
      }
      .cui-card--8 {
        width: 66.66667%;
      }
      .cui-card--9 {
        width: 75%;
      }
      .cui-card--10 {
        width: 83.33333%;
      }
      .cui-card--11 {
        width: 91.66667%;
      }
      .cui-card--12 {
        width: 100%;
      }
    }

    .cui-card--nav article {
      padding: 1rem;
      text-align: center;
    }
  `],
})
export class CardComponent {
  @Input('size') public size: string;
  @Input('type') public type: string;
}
