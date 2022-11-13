import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetPostsService } from 'src/app/services/get-posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  tmpPosts: any[] = [];
  posts: Post[] = [];

  constructor(private postsData: GetPostsService) { }

  ngOnInit(): void {
    this.postsData.getPosts(15).subscribe((data) => {
      //this.posts = data;
      this.tmpPosts = data;
    });
  }
}
