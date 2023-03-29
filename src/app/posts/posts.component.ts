import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  loadedPosts$: Observable<Post[]>;

  constructor(private service: PostsService) {
    this.loadedPosts$ = this.service.fetchPosts();
  }

  filterPosts(filter: any) {
    this.loadedPosts$ = this.service
      .getPosts()
      .pipe(
        map((posts) => posts.filter((post) => post.title.includes(filter))),
      );
  }
}
