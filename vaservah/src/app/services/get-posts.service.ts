import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  constructor(private http: HttpClient) { }

  posts: Post[] = [];
  post: Post = {};

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(postId: Number): Post {
    return this.post;
  }
}
