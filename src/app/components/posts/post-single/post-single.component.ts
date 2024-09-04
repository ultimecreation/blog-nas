import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Post } from '../../../types/Post';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-single.component.html'
})
export class PostSingleComponent {

  private postsService = inject(PostsService)
  @Input() post!: Post
  @Output() refetchPosts = new EventEmitter()

  handleDeletePost(e: Event, id: string) {
    e.preventDefault()
    this.postsService.deletePost(id).subscribe({
      next: (data) => {
        this.refetchPosts.emit()
      },
      error: (httpError: HttpErrorResponse) => {
        console.log(httpError.message)
      }
    })

  }
}
