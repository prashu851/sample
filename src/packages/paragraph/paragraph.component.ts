import { Component, Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'testing-root-place-1',
  templateUrl: './paragraph.component.html'
})
@Injectable()
export class ParagraphComponent {
  title = 'Tour of heroes';
  heroes=[];
  myFavHero='Not available';
  abcd="asdfasdfasdfadf"
  // heroes=[new Hero(1, 'Prashanth'),new Hero(2, 'Sumanth')]
  // myFavHero=this.heroes[0].name
  constructor(
    private httpClient: HttpClient
  ) {}

  getHeroes() {
    this.httpClient.get("http://localhost:8000/heroes")
    .subscribe((resp:[Hero]) => {
      this.heroes = resp;
      this.myFavHero = resp[0].name;
      console.log("coming");
      console.log(resp);
      console.log("end");
    })
  }
}
