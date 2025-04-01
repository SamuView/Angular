import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = 'Malaga';
}
