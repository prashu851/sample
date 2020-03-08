import { Component } from '@angular/core';

@Component({
  selector: 'testing-root-place-1',
  templateUrl: './paragraph.component.html'
})
export class ParagraphComponent {
  title = 'Tour of heroes';
  heroes=[{'id':1, 'name':'Prashanth'},{'id':2,'name':'Sumanth'}]
  myFavHero=this.heroes[0].name
}
