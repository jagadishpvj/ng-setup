import { Component, OnInit } from '@angular/core';
import { Hero } from '../_model/hero';
import { HEROES } from './heroes-mock';
import { HeroService } from '../hero.service';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
