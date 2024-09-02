import { Component, Input, input } from '@angular/core';
import { Post } from '../../../types/Post';

@Component({
  selector: 'app-post-single',
  standalone: true,
  imports: [],
  templateUrl: './post-single.component.html'
})
export class PostSingleComponent {

  @Input() post: Post | undefined = undefined
}
