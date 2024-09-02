import { Component, Input, input } from '@angular/core';
import { Post } from '../../../types/Post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-single.component.html'
})
export class PostSingleComponent {

  @Input() post!: Post

  handleDeletePost(e: Event, id: string) {
    e.preventDefault()
    console.log(id)
  }
}
