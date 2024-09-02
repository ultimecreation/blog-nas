import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<{ posts: Post[] }>('http://localhost:3000/posts')
  }

  savePost(post: Post) {
    return this.httpClient.post<{ post: Post }>('http://localhost:3000/posts', post)
  }
}
