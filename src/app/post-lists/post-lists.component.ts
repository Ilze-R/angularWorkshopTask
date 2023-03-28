import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss'],
})
export class PostListsComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private service: PostsService, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.service.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
    });
  }
}
