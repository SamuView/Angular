import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  standalone: true,
  template: `
    <ul>
      <h3>Los juegos favoritos de {{ username }}</h3>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: '1',
       name: 'Uncharted 4'
    },
    {
      id: '2',
      name: 'The Last of Us'
    },
    {
      id: '3',
      name: 'God of War'
    }
  ];
}
