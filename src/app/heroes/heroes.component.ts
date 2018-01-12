import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros: Hero[];

  //contruction khong nen goi ham hay http tu server gay ton thoi gian, chi nen goi khoi tao cac tham so, thuoc tinh, 
  //de goi phuong thuc hay thuoc tinh nen de cho ngOnit(), no chi chay sau contructon
  constructor(private heroService: HeroService) // vua khoi tao, vua inject HeroService vao trong bien heroservice
  { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // xu ly dong bo
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
    // this.heros = this.heroService.getHeroes();
  }
}
