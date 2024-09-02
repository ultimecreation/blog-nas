import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../types/Post';
import { HttpErrorResponse } from '@angular/common/http';
import { PostSingleComponent } from "../post-single/post-single.component";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostSingleComponent],
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  private postsService = inject(PostsService)
  protected posts: Post[] | undefined = []

  ngOnInit(): void {
    this.fetchPosts()
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe({
      next: (data: any) => {
        if (data?.length > 0) {
          this.posts = [...data]
        }
      },
      error: (httpError: HttpErrorResponse) => { }
    })
  }
}
