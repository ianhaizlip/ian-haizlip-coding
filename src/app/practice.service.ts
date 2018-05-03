import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {

  constructor() { }

  practiceApps = [{title: 'Train Scheduler', url: 'https://ianhaizlip.github.io/train-scheduler/'},
                  {title: 'Warriors Trivia Game', url: 'https://ianhaizlip.github.io/TriviaGame/'},
                  {title: 'Star Wars RPG', url: 'https://ianhaizlip.github.io/starwars-rpg/'},
                  {title: 'Giphy Api App', url: 'https://ianhaizlip.github.io/giphy-app/'}];

}
