import { Component, Injectable } from '@angular/core';
import { Mobile } from './mobile';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'testing-root-place-2',
  templateUrl: './mobile.component.html'
})
@Injectable()
export class MobileComponent {
  title = 'List of mobiles';
  phones=[];
  constructor(
    private httpClient: HttpClient
  ) {}

  getMobiles() {
    this.httpClient.get("http://localhost:8000/mobiles")
    .subscribe((resp:[Mobile]) => {
      this.phones = resp;
      console.log(resp);
      
    })
  }
}

