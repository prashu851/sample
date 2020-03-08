import { Component } from '@angular/core';
import { Mobile } from './mobile';

@Component({
  selector: 'testing-root-place-2',
  templateUrl: './mobile.component.html'
})
export class MobileComponent {
  title = 'List of mobiles';
  phones=[new Mobile('Samsung', 9999),new Mobile('Realme', 10999)]
}
