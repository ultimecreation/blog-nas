import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../types/Post';
import { v4 } from 'uuid';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-add.component.html'
})
export class PostAddComponent {
  private postsService = inject(PostsService)
  protected loggedUser = inject(AuthService).getLoggedUser()
  private router = inject(Router)
  public title = model('')
  public content = model('')

  onSubmit(e: Event) {
    e.preventDefault()
    const newPost: Post = {
      id: v4(),
      title: this.title(),
      content: this.content(),
      author_id: this.loggedUser.id
    }
    this.postsService.savePost(newPost).subscribe({
      next: (data: any) => {
        if (data.id) {
          this.router.navigateByUrl('/')
        }
      },
      error: (httpError: HttpErrorResponse) => {
        console.log(httpError.message);
      }
    })
    console.log(this.title(), this.content())
  }
}
