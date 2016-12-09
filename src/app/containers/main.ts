import {Component} from '@angular/core';


@Component({
  selector: 'main-container',
  template: `
    <div class="main-container">
      <app-bar></app-bar>
      <main class="main">
        Conteudo principal
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class MainContainer {};
