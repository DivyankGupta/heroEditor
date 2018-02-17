import { Component, OnInit } from '@angular/core';
import { hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero1 :  hero = {
    id : 1,
    name : 'windo'
  };
  ngOnInit() {
  }
  
  
}
