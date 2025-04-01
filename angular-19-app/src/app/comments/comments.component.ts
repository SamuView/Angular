import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  standalone: true,
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://wallpapercave.com/wp/wp7351915.jpg" alt="Gatito">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime modi assumenda exercitationem quis eos, vel rem mollitia culpa, pariatur numquam animi quo repellendus veritatis perferendis nulla veniam. Earum, aliquam.</p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
